import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { login } from "../../actions/authActions";
import firebase from "../../services/firebase/index";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function googleSignIn() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        var user = result.user;
        var newUser = result.additionalUserInfo.isNewUser;
        if (newUser) {
          firebase.firestore().collection("users").doc(user.uid).set({
            fname: user.displayName,
            lname: "",
            phone: "",
            email: user.email,
            cart: [],
            address: "",
          });
          dispatch({
            type: "SIGN_IN",
            payload: {
              user: {
                fname: user.displayName,
                lname: "",
                phone: "",
                email: user.email,
                cart: [],
                address: "",
              },
              uid: user.uid,
            },
          });
          dispatch({ type: "CLOSE_MODAL" });
        } else {
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then((doc) => {
              console.log(doc.data());
              dispatch({
                type: "LOG_IN",
                payload: { user: doc.data(), uid: user.uid },
              });
              dispatch({
                type: "INITIALISE_CART",
                payload: { cart: doc.data().cart },
              });
            });
          dispatch({ type: "CLOSE_MODAL" });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function facebookLogin() {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        var user = result.user;
        var newUser = result.additionalUserInfo.isNewUser;
        if (newUser) {
          firebase.firestore().collection("users").doc(user.uid).set({
            fname: user.displayName,
            lname: "",
            phone: "",
            email: user.email,
            cart: [],
            address: "",
          });
          dispatch({
            type: "SIGN_IN",
            payload: {
              user: {
                fname: user.displayName,
                lname: "",
                phone: "",
                email: user.email,
                cart: [],
                address: "",
              },
              uid: user.uid,
            },
          });
          dispatch({ type: "CLOSE_MODAL" });
        } else {
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then((doc) => {
              console.log(doc.data());
              dispatch({
                type: "LOG_IN",
                payload: { user: doc.data(), uid: user.uid },
              });
              dispatch({
                type: "INITIALISE_CART",
                payload: { cart: doc.data().cart },
              });
            });
          dispatch({ type: "CLOSE_MODAL" });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(user));
    setUser(user);
  }
  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    setUser((prevValue) => {
      switch (id) {
        case "email":
          return {
            email: value,
            password: prevValue.password,
          };
        case "password":
          return {
            email: prevValue.email,
            password: value,
          };
        default:
          return prevValue;
      }
    });
  }
  return (
    <section className="login-form">
      <form className="p-2" style={{ width: "400px" }} onSubmit={handleSubmit}>
        <TextField
          className="mt-2"
          color="primary"
          id="email"
          label="Email"
          style={{ width: "100%" }}
          variant="outlined"
          onChange={handleChange}
          type="email"
        />
        <br />
        <TextField
          className="mt-2"
          color="primary"
          id="password"
          label="Password"
          style={{ width: "100%" }}
          variant="outlined"
          onChange={handleChange}
          type="password"
        />
        <br />
        <Button
          type="submit"
          className="mt-2"
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </form>
      <p style={{ margin: "1rem auto", color: "black" }}>---OR---</p>
      <ButtonGroup>
        <Button
          color="secondary"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            googleSignIn();
          }}
        >
          <i class="fab fa-google mr-1"></i>Google
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            facebookLogin();
          }}
        >
          <i class="fab fa-facebook mr-1"></i>Facebook
        </Button>
      </ButtonGroup>
      <br />
      <Button
        onClick={() => {
          dispatch({ type: "CLOSE_MODAL" });
          setTimeout(() => {
            dispatch({ type: "OPEN_SIGNUP_MODAL" });
          }, 200);
        }}
        style={{ marginTop: "6px" }}
      >
        Need a new account?
      </Button>
    </section>
  );
}
