export function addToCart(book) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_LOADING" });
    const firebase = getFirebase();
    const uid = getState().auth.uid;
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
            dispatch({ type: "STOP_LOADING" });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
}
export function removeFromCart(book) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_LOADING" });
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
            dispatch({ type: "STOP_LOADING" });
          });
      });
  };
}

export function increaseItem(bookId) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_LOADING" });
    const uid = getState().auth.uid;
    const firebase = getFirebase();
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((res) => {
        var newCart = res.data().cart;
        for (let i = 0; i < newCart.length; i = i + 1) {
          if (newCart[i].id === bookId) {
            newCart[i].quantity += 1;
          }
        }
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .update({ cart: newCart })
          .then(() => {
            dispatch({ type: "INCREASE_ITEM", payload: { cart: newCart } });
            dispatch({ type: "STOP_LOADING" });
          });
      });
  };
}

export function decreaseItem(bookId) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_LOADING" });
    const uid = getState().auth.uid;
    const firebase = getFirebase();
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((res) => {
        var newCart = res.data().cart;
        for (let i = 0; i < newCart.length; i = i + 1) {
          if (newCart[i].id === bookId) {
            newCart[i].quantity -= 1;
          }
        }
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .update({ cart: newCart })
          .then(() => {
            dispatch({ type: "DECREASE_ITEM", payload: { cart: newCart } });
            dispatch({ type: "STOP_LOADING" });
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
