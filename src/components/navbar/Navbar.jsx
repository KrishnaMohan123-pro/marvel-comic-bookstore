import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Avatar } from "@material-ui/core";

export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.modal);
  const loggedIn = useSelector((state) => state.loggedIn);
  const userName = useSelector((state) => state.auth.user.fname);
  const userImage = useSelector((state) => state.auth.user.photoURL);

  return (
    <AppBar className="app-bar" position="sticky" elevation={0}>
      <Toolbar>
        <Link to="/" style={{ color: "inherit" }}>
          <Typography variant="h6">Marvel</Typography>
        </Link>
        <SearchBar />
        <div style={{ marginLeft: "auto" }}>
          {loggedIn ? (
            <Fragment>
              <Button
                color="inherit"
                variant="text"
                onClick={() => {
                  dispatch({ type: "LOGGED_OUT" });
                  dispatch(logout());
                  history.push("/");
                }}
              >
                SIGNOUT
              </Button>
              <Link to="/cart" style={{ color: "inherit" }}>
                <Button
                  color="inherit"
                  variant="text"
                  style={{ position: "relative" }}
                >
                  <CartLink />
                </Button>
              </Link>

              <Link
                to="/account"
                style={{ color: "inherit", marginLeft: "5px" }}
              >
                <Button color="inherit" variant="text">
                  <Avatar
                    alt={userName}
                    src={userImage}
                    // style={{ width: "1.5rem", height: "1.5rem" }}
                  />
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
        </div>
      </Toolbar>
    </AppBar>
  );
}
