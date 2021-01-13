import { _INITIALISE_USER } from "./actionsList/authActionsList";
import { _FIREBASE_LOAD, _STOP_LOAD } from "./actionsList/loadActionsList";

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
          });
        firebase
          .firestore()
          .collection("users")
          .doc(user.user.uid)
          .get()
          .then((data) => {
            dispatch({
              type: "SIGN_IN",
              payload: { user: data.data(), uid: user.user.uid },
            });
            dispatch({ type: "CLEAR_CART" });
            dispatch({
              type: "INITIALISE_CART",
              payload: { cart: data.data().cart },
            });
          });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERR", payload: { error: err } });
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
              type: "LOG_IN",
              payload: { user: data.data(), uid: user.user.uid },
            });
            dispatch({ type: "CLEAR_CART" });
            dispatch({
              type: "INITIALISE_CART",
              payload: { cart: data.data().cart },
            });
            dispatch({ type: "CLOSE_MODAL" });
          });
      })
      .catch((err) => {
        dispatch({
          type: "LOG_IN_ERR",
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
        dispatch({ type: "SIGNED_OUT" });
        dispatch({ type: "CLEAR_CART" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNOUT_ERROR", payload: { error: err } });
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
