import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Badge from "@material-ui/core/Badge";
import firebase from "../../services/firebase/index";

export default function CartLink() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const uid = useSelector((state) => state.auth.uid);
  let length = cartItems.length;

  useEffect(() => {
    if (loggedIn) {
      dispatch({ type: "START_LOADING" });
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          dispatch({
            type: "INITIALISE_CART",
            payload: { cart: doc.data().cart },
          });
          dispatch({ type: "STOP_LOADING" });
        });
    }
  }, []);

  return (
    <Badge badgeContent={length === 0 ? "0" : length} color="primary">
      CART
    </Badge>
  );
}
