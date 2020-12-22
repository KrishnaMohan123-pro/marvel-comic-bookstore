import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";

export default function CartCard(props) {
  return (
    <div className="container">
      <div className="cart-item row">
        <div className="book col-md-4">
          <Link to={"/book/" + props.id}>
            <img className="book-image" src={props.img} />
          </Link>
        </div>
        <div className="book cart-title col-md-5 align-self-center">
          <Link to={"/book/" + props.id}>
            <p>{props.title}</p>
          </Link>
        </div>
        <div className="book cart-price col-md-3">
          <p>{"$ " + props.price}</p>
          <div>
            <CartButton id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
