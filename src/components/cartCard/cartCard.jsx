import React from "react";

export default function cartCard(props) {
  return (
    <div className="container">
      <div className="cart-item row">
        <div className="book book-image col-4">Image</div>
        <div className="book book-title col-5">Title</div>
        <div className="book book-price col-3">Price and button</div>
      </div>
    </div>
  );
}
