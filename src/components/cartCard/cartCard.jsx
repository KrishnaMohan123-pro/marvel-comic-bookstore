import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import { useSelector } from "react-redux";

export default function CartCard(props) {
  const cart = useSelector((state) => state.cart).cart;
  let quantity = 0;
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].id === props.id) {
      quantity = cart[i].quantity;
    }
  }
  return (
    <div className="container">
      <div className="cart-item row">
        <div className="book col-md-4">
          <Link to={"/book/" + props.id}>
            <img className="book-image" src={props.img} alt={props.title} />
          </Link>
        </div>
        <div className="book cart-title col-md-5 align-self-center">
          <Link to={"/book/" + props.id}>
            <p>{props.title}</p>
          </Link>
        </div>
        <div className="book cart-price col-md-3">
          <p>{"$ " + props.price}</p>
          <p>{`Quantity : ${quantity}`}</p>
          <div>
            <CartButton id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
