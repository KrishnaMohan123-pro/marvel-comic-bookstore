import { _FIREBASE_LOAD, _STOP_LOAD } from "./actionsList/loadActionsList";
import {
  _ADD,
  _REMOVE,
  _INCREASE,
  _DECREASE,
  _INITIALISE_CART,
} from "./actionsList/cartActionsList";
function updatedCart(actionType, newCartData) {
  return { type: actionType, payload: { cart: newCartData } };
}
export function addToCart(book) {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: _FIREBASE_LOAD });
    const uid = getState().auth.uid;
    const firebase = getFirebase();
    const cart = getState().cart.cart;
    cart.push(book);
    dispatch({ type: _ADD, payload: { cart: cart } });
    firebase
      .firestore()
      .collection("cart")
      .doc(uid)
      .collection("books")
      .doc(book.id.toString())
      .set({
        id: book.id,
        title: book.title,
        image: book.img,
        price: book.price,
        quantity: book.quantity,
      })
      .then(() => {
        console.log("added");
      })
      .catch((e) => {
        console.log(e);
      });
    // const token = await firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(uid)
    //   .update({ cart: cart })
    //   .then(() => {
    //     return true;
    //   })
    //   .catch((err) => console.log(err));
    // if (token)
    dispatch({ type: _STOP_LOAD });
  };
}

export function removeFromCart(book) {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: _FIREBASE_LOAD });
    const firebase = getFirebase();
    const cart = getState().cart.cart;
    const uid = getState().firebase.auth.uid;
    let newCartData = cart.filter((item) => item.id != book.id);
    dispatch(updatedCart(_REMOVE, newCartData));
    firebase
      .firestore()
      .collection("cart")
      .doc(uid)
      .collection("books")
      .doc(book.id.toString())
      .delete()
      .then(() => {
        console.log("deleted");
      });

    dispatch({ type: _STOP_LOAD });
  };
}

export function changeQuantity(type, bookId) {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: _FIREBASE_LOAD });
    const uid = getState().auth.uid;
    const firebase = getFirebase();
    const cart = getState().cart.cart;
    let newQuantity = 0;
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === bookId) {
        if (type === "INCREASE") {
          cart[i].quantity += 1;
          newQuantity = cart[i].quantity;
        } else if (type === "DECREASE") {
          cart[i].quantity -= 1;
          newQuantity = cart[i].quantity;
        }
      }
    }
    updatedCart(type === "INCREASE" ? _INCREASE : _DECREASE, cart);
    firebase
      .firestore()
      .collection("cart")
      .doc(uid)
      .collection("books")
      .doc(bookId.toString())
      .update({ quantity: newQuantity });
    dispatch({ type: _STOP_LOAD });
  };
}
export function initialiseCart(uid) {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const cartDataArray = [];
    const firebaseResponse = await firebase
      .firestore()
      .collection("cart")
      .doc(uid)
      .collection("books")
      .get();
    firebaseResponse.forEach((doc) => cartDataArray.push(doc.data()));

    // const ids = Object.keys(cartData);
    // ids.forEach((id) => cartDataArray.push(cartData[id]));
    dispatch({ type: _INITIALISE_CART, payload: { cart: cartDataArray } });
  };
}
