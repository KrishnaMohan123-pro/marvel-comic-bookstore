import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Badge from "@material-ui/core/Badge";
import firebase from "../../services/firebase/index";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { initialiseCart } from "../../actions/cartActions";

export default function CartLink() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart).cart;
  let length = cartItems.length;

  return (
    <Badge badgeContent={length === 0 ? "0" : length} color="primary">
      <ShoppingCartIcon fontSize="small" />
      CART
    </Badge>
  );
}
