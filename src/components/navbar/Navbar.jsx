import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
import SearchBar from "../SearchBar/searchBar";

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
  const modalVisible = useSelector((state) => state.modal);
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <AppBar color="secondary">
      <Toolbar>
        <Link to="/" style={{ color: "inherit" }}>
          <Typography variant="h6">Marvel</Typography>
        </Link>
        <SearchBar />
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
                SIGNOUT
              </Button>
              <Link to="/account" style={{ color: "inherit" }}>
                <Button color="inherit" variant="text">
                  ACCOUNT
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
