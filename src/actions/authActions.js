import {
  _INITIALISE_USER,
  _LOG_IN,
  _SIGN_IN,
  _SIGNED_OUT,
  _SIGNOUT_ERROR,
  _SIGN_IN_ERR,
  _LOG_IN_ERR,
} from "./actionsList/authActionsList";
import { _FIREBASE_LOAD, _STOP_LOAD } from "./actionsList/loadActionsList";
import { _CLEAR_CART, _INITIALISE_CART } from "./actionsList/cartActionsList";

export function signUp(creds) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((user) => {
        firebase
          .firestore()
          .collection("users")
          .doc(user.user.uid)
          .set({
            fname: creds.fname,
            lname: creds.lname,
            email: creds.email,
            phone: creds.phone,
            cart: [],
            address: {
              addressLine1: "",
              addressLine2: "",
              pin: "",
              city: "",
              state: "",
              country: "",
            },
            photoURL: "",
            role: "user",
          });
        firebase
          .firestore()
          .collection("users")
          .doc(user.user.uid)
          .get()
          .then((data) => {
            dispatch({
              type: _SIGN_IN,
              payload: { user: data.data(), uid: user.user.uid },
            });
            dispatch({ type: _CLEAR_CART });
            dispatch({
              type: _INITIALISE_CART,
              payload: { cart: data.data().cart },
            });
          });
      })
      .catch((err) => {
        dispatch({ type: _SIGN_IN_ERR, payload: { error: err } });
      });
  };
}

export function login(creds) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then((user) => {
        firebase
          .firestore()
          .collection("users")
          .doc(user.user.uid)
          .get()
          .then((data) => {
            dispatch({
              type: _LOG_IN,
              payload: { user: data.data(), uid: user.user.uid },
            });
            dispatch({ type: _CLEAR_CART });
            dispatch({
              type: _INITIALISE_CART,
              payload: { cart: data.data().cart },
            });
            dispatch({ type: "CLOSE_MODAL" });
          });
      })
      .catch((err) => {
        dispatch({
          type: _LOG_IN_ERR,
          payload: { error: "Incorrect Email or Password" },
        });
      });
  };
}
export function logout() {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: _SIGNED_OUT });
        dispatch({ type: "CLEAR_CART" });
      })
      .catch((err) => {
        dispatch({ type: _SIGNOUT_ERROR, payload: { error: err } });
      });
  };
}

export function initialiseUser(uid) {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: _FIREBASE_LOAD });
    const firebase = getFirebase();
    const res = await firebase.firestore().collection("users").doc(uid).get();
    const userData = await res.data();
    dispatch({
      type: _INITIALISE_USER,
      payload: {
        user: {
          address: userData.address,
          email: userData.email,
          fname: userData.fname,
          lname: userData.lname,
          phone: userData.phone,
          photoURL: userData.photoURL,
          role: userData.role,
        },
        uid: uid,
      },
    });
    dispatch({ type: _STOP_LOAD });
  };
}
