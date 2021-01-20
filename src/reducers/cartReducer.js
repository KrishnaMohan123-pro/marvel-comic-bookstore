import { toast } from "react-toastify";
import {
  _ADD_TO_CART,
  _REMOVE_FROM_CART,
  _INCREASE,
  _DECREASE,
  _INITIALISE_CART,
  _CLEAR_CART,
} from "../actions/actionsList/cartActionsList";

const initialState = { cart: [] };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case _INITIALISE_CART:
      return { cart: action.payload.cart };
    case _ADD_TO_CART:
      toast.success("Item added to cart");
      return { cart: action.payload.cart };
    case _REMOVE_FROM_CART:
      toast.error("Item removed from cart");
      return { cart: action.payload.cart };
    case _INCREASE:
      toast.success("Item Quantity Increased");
      return { cart: action.payload.cart };
    case _DECREASE:
      toast.error("Item Quantity Decreased");
      return { cart: action.payload.cart };
    case _CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
