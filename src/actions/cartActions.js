export function addToCart(userId, book) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => {
        const cartData = doc.data().cart || [];
        cartData.push(book);
        firebase
          .firestore()
          .collection('users')
          .doc(userId)
          .update({ cart: cartData })
          .then(() => {
            dispatch({ type: 'ADDED_TO_CART' });
          });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };
}
export function removeFromCart(userId, book) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => {
        let newCartData = doc.data().cart.filter((item) => item.id !== book.id);
        firebase
          .firestore()
          .collection('users')
          .doc(userId)
          .update({ cart: newCartData })
          .then(() => {
            dispatch({ type: 'REMOVED_FROM_CART' });
          });
      });
  };
}
