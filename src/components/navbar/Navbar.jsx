import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TransitionModal from "../Modal/modal";
import LoginForm from "../../utility/forms/loginForm";
import SignupForm from "../../utility/forms/signupForm";
import { logout } from "../../actions/authActions";
import CartLink from "./cartLink";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const modalVisible = useSelector((state) => state.modal);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userID = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );

  return (
    <AppBar color="secondary">
      <Toolbar>
        <Link to="/" style={{ color: "inherit" }}>
          <Typography variant="h6">Marvel</Typography>
        </Link>
        <ButtonGroup style={{ marginLeft: "auto" }}>
          {loggedIn ? (
            <Fragment>
              <Link to="/cart" style={{ color: "inherit" }}>
                <Button
                  color="inherit"
                  variant="text"
                  style={{ position: "relative" }}
                >
                  <CartLink />
                </Button>
              </Link>
              <Button
                color="inherit"
                variant="text"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                SignOut
              </Button>
              <Link to="/account" style={{ color: "inherit" }}>
                <Button color="inherit" variant="text">
                  Account
                </Button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <TransitionModal
                linkName="Login"
                modalTitle="Welcome Back"
                childComponent={<LoginForm />}
                color="primary"
                modalName="LOGIN"
                modalVisible={modalVisible.loginModalVisible}
              />
              <TransitionModal
                linkName="Sign up"
                modalTitle="Hello New Friend"
                childComponent={<SignupForm />}
                color="primary"
                modalName="SIGNUP"
                modalVisible={modalVisible.signupModalVisible}
              />
            </Fragment>
          )}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
