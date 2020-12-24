import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import firebase from "../../services/firebase/index";
import Loader from "../../components/Loader/loader";
import CartCard from "../../components/cartCard/cartCard";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const uid = useSelector((state) => state.auth.uid);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
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
        });
      setLoading(false);
    }
  }, []);
  if (!loggedIn) {
    return (
      <div className="cart-body">
        <p style={{ fontFamily: "Goldman", fontSize: "2rem" }}>
          Please Login First
        </p>
      </div>
    );
  }
  if (loading) {
    return <Loader />;
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
    total = total + parseFloat(cartItems[i].price);
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
          />
        );
      })}
      <div className="container" style={{ fontSize: "1.25rem" }}>
        <p className="book book-number float-left">
          <span style={{ textDecoration: "underline" }}>Number of Books</span>:{" "}
          {cartItems.length}
        </p>
        <p className="book book-total float-right">
          <span style={{ textDecoration: "underline" }}>Total</span>: ${" "}
          {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
