import React from "react";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function CartLink() {
  const cartItems = useSelector((state) => state.cart).cart;
  let length = cartItems.length;

  return (
    <Badge badgeContent={length === 0 ? "0" : length} color="primary">
      <ShoppingCartIcon fontSize="small" />
      CART
    </Badge>
  );
}
