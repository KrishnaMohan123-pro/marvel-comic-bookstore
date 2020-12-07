export function addToCart(book) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged((creds) => {
      firebase
        .firestore()
        .collection("users")
        .doc(creds.uid)
        .get()
        .then((doc) => {
          var cartData = doc.data().cart;
          cartData.push(book);
          // totalAmount=totalAmount+book_id
          firebase
            .firestore()
            .collection("users")
            .doc(creds.uid)
            .update({ cart: cartData })
            .then(() => {
              dispatch({ type: "ADDED_TO_CART" });
            });
        });
    });
  };
}
export function removeFromCart(book) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged((creds) => {
      firebase
        .firestore()
        .collection("users")
        .doc(creds.uid)
        .get()
        .then((doc) => {
          let newCartData = doc
            .data()
            .cart.filter((item) => item.id !== book.id);
          console.log(book.id, newCartData);
          firebase
            .firestore()
            .collection("users")
            .doc(creds.uid)
            .update({ cart: newCartData })
            .then(() => {
              dispatch({ type: "REMOVED_FROM_CART" });
            });
        });
    });
  };
}
