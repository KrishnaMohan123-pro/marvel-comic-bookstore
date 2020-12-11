import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/cartCard/cartCard";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Cart() {
  // const doc = useSelector((state) => state);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  // const userID = doc.firebase.auth.uid;
  // useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  // const data = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[userID]
  // );
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  if (!loggedIn) {
    return (
      <p
        style={{ fontFamily: "Goldman", fontSize: "2rem", marginTop: "4.25%" }}
      >
        Please Login First
      </p>
    );
  }
  // if (!isLoaded(data)) {
  //   return (
  //     <div class="spinner-grow text-warning" role="status">
  //       <span class="sr-only">Loading...</span>
  //     </div>
  //   );
  // }
  let Items = cartItems;
  // data.cart;

  if (Items.length === 0) {
    return (
      <div style={{ marginTop: "25%" }}>
        <p>Ooops.....No items in cart</p>
        <Link to="/books">Lets go to the world of comics</Link>
      </div>
    );
  }
  let total = 0;
  for (let i = 0; i < Items.length; i = i + 1) {
    total = total + parseFloat(Items[i].price);
  }
  return (
    <div style={{ marginTop: "6%" }}>
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
        <p className="book float-left">
          <span style={{ textDecoration: "underline" }}>Number of Books</span>:{" "}
          {Items.length}
        </p>
        <p className="book float-right">
          <span style={{ textDecoration: "underline" }}>Total</span>: ${" "}
          {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
