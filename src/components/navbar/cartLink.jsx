import React from "react";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";

export default function CartLink() {
  const uid = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect(() => [{ collection: "users", doc: uid }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[uid]
  );
  if (!isLoaded(data)) return "CART";
  return (
    <Badge badgeContent={data.cart.length} color="primary">
      CART
    </Badge>
  );
}
