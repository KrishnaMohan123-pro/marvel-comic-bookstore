import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../services/firebase/index";
import CartCard from "../../components/cartCard/cartCard";
import Loader from "../../components/Loader/loader";
export default function LoggedInPage() {
  const uid = useSelector((state) => state.auth.uid);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        setCart(doc.data().cart);
        console.log(doc.data().cart);
        dispatch({
          type: "INITIALISE_CART",
          payload: { cart: doc.data().cart },
        });
      });
  }, []);
  const Items = useSelector((state) => state.cart.cart);
  if (cart.length === 0) {
    return <Loader />;
  }

  let total = 0;
  for (let i = 0; i < Items.length; i = i + 1) {
    total = total + parseFloat(Items[i].price);
  }

  return (
    <div className="cart-body">
      <h1>Cart Items</h1>
      {Items.map((Item) => {
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
          {Items.length}
        </p>
        <p className="book book-total float-right">
          <span style={{ textDecoration: "underline" }}>Total</span>: ${" "}
          {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
