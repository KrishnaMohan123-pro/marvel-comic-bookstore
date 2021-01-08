import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import CartCard from "../../components/cartCard/cartCard";

import PayButton from "../../services/razorPay/frontend/index";
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const loader = useSelector((state) => state.loader);
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

  let total = 0;
  for (let i = 0; i < cartItems.length; i = i + 1) {
    total = total + parseFloat(cartItems[i].price) * cartItems[i].quantity;
  }
  let quantities = 0;
  for (let i = 0; i < cartItems.length; i = i + 1) {
    quantities = quantities + cartItems[i].quantity;
  }
  return (
    <div className="cart-body">
      <h1>Cart Items</h1>
      {cartItems.map((Item) => {
        return (
          <CartCard
            key={Item.id}
            id={Item.id}
            img={Item.img}
            price={Item.price}
            title={Item.title}
            quantity={Item.quantity}
          />
        );
      })}
      <div className="container" style={{ fontSize: "1.25rem" }}>
        <p className="book book-number float-left">
          <span style={{ textDecoration: "underline" }}>Number of Books</span>:{" "}
          {quantities}
        </p>
        <p className="book book-total float-right" name="total">
          <span style={{ textDecoration: "underline" }}>Total</span>: ${" "}
          {total.toFixed(2)}
        </p>
      </div>
      <PayButton />
    </div>
  );
}
