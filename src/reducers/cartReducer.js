import { toast } from "react-toastify";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADDED_TO_CART":
      toast("Item added to cart");
      return state;
    case "REMOVED_FROM_CART":
      toast("Item removed from cart");
      return state;
    default:
      return state;
  }
}
