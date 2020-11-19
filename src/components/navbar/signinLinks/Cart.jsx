import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

export default function Cart() {
  const data = useSelector((state) => state);
  var cartSize = 0;
  const userId = data.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userId }]);
  const doc = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userId]
  );
  if (!isLoaded(doc)) {
    return (
      <li className="nav-item active">
        <span className="nav-link" type="button">
          <i className="fas fa-shopping-cart"></i>
          <span className="sr-only">(current)</span>
        </span>
      </li>
    );
  } else {
    return (
      <Link to="/cart">
        <li className="nav-item active">
          <span className="nav-link position-relative" type="button">
            {/* <i className="fas fa-shopping-cart"></i> */}
            CART
            <span
              className="badge badge-danger"
              style={{
                position: "absolute",
                top: "-5%",
                left: "70%",
              }}
            >
              {doc.cart.length}
            </span>
            <span className="sr-only">(current)</span>
          </span>
        </li>
      </Link>
    );
  }
}
