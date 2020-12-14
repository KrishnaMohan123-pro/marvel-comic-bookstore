import React from "react";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";

export default function CartLink() {
  const cartItems = useSelector((state) => state.cart.cart);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  let length = cartItems.length;
  // const uid = useSelector((state) => state.firebase.auth.uid);
  // useFirestoreConnect(() => [{ collection: "users", doc: uid }]);
  // const data = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[uid]
  // );
  // if (!isLoaded(data)) return "CART";
  return (
    <Badge badgeContent={length === 0 ? "0" : length} color="primary">
      CART
    </Badge>
  );
}
