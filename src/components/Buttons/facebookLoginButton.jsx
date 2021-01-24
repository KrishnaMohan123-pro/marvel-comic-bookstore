import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import firebase from "../../services/firebase/index";

export default function FacebookLogin() {
  const dispatch = useDispatch();
  function facebookLogin() {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        console.log(result.user.photoURL);
        var user = result.user;
        var newUser = result.additionalUserInfo.isNewUser;
        if (newUser) {
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .set({
              address: {
                addressLine1: "",
                addressLine2: "",
                pin: "",
                city: "",
                state: "",
                country: "",
              },
              cart: [],
              email: user.email,
              fname: user.displayName,
              lname: "",
              phone: "",
              photoURL: result.user.photoURL,
            });
          firebase.firestore().collection("cart").doc(user.uid).set({});
          dispatch({
            type: "SIGN_IN",
            payload: {
              user: {
                address: {
                  addressLine1: "",
                  addressLine2: "",
                  pin: "",
                  city: "",
                  state: "",
                  country: "",
                },
                email: user.email,
                fname: user.displayName,
                lname: "",
                phone: "",
                photoURL: result.user.photoURL,
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

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={(e) => {
        e.preventDefault();
        facebookLogin();
      }}
    >
      <i class="fab fa-facebook mx-1 fa-2x"></i>
    </Button>
  );
}
