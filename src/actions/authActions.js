import { toast } from "react-toastify";

export function signUp(creds) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((user) => {
        // console.log(user.user.uid);
        firebase.firestore().collection("users").doc(user.user.uid).set({
          fname: creds.fname,
          lname: creds.lname,
          email: creds.email,
          phone: creds.phone,
          cart: [],
          address: "",
        });
        dispatch({ type: "SIGN_IN", payload: { user: creds } });
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
      .then(() => {
        dispatch({ type: "LOG_IN", payload: { user: creds } });
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
        toast("User Signed Out");
        dispatch({ type: "SIGNED_OUT" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNOUT_ERROR", payload: { error: err } });
      });
  };
}
