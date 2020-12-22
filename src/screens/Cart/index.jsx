import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import LoggedInPage from "./loggedInPage";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  if (!loggedIn) {
    return (
      <div className="cart-body">
        <p style={{ fontFamily: "Goldman", fontSize: "2rem" }}>
          Please Login First
        </p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-body">
        <p>Ooops.....No items in cart</p>
        <Link to="/books">Lets go to the world of comics</Link>
      </div>
    );
  }
  return <LoggedInPage />;
}
