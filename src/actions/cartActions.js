import { toast } from "react-toastify";

export function addToCart(book) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const uid = getState().firebase.auth.uid;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        var cartData = doc.data().cart;
        cartData.push(book);
        firebase
          .firestore()
          .collection("users")
          .doc(getState().firebase.auth.uid)
          .update({ cart: cartData })
          .then(() => {
            dispatch({ type: "ADDED_TO_CART", payload: { cart: cartData } });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
}
export function removeFromCart(book) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const uid = getState().firebase.auth.uid;
    firebase
      .firestore()
      .collection("users")
      .doc(getState().firebase.auth.uid)
      .get()
      .then((doc) => {
        var cartData = doc.data().cart.filter((item) => item.id !== book.id);

        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .update({ cart: cartData })
          .then(() => {
            dispatch({
              type: "REMOVED_FROM_CART",
              payload: { cart: cartData },
            });
          });
      });
  };
}

export function initialiseCart() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const uid = getState().auth.uid;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        var cartData = doc.data().cart;
        dispatch({ type: "INITIALISE_CART", payload: { cart: cartData } });
      });
  };
}
