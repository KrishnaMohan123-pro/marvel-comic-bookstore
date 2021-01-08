import { toast } from "react-toastify";

const initialState = { cart: [] };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "INITIALISE_CART":
      return { cart: action.payload.cart };
    case "ADDED_TO_CART":
      toast.success("Item added to cart");
      return { cart: action.payload.cart };
    case "REMOVED_FROM_CART":
      toast.error("Item removed from cart");
      return { cart: action.payload.cart };
    case "INCREASE_ITEM":
      toast.success("Item Quantity Increased");
      return { cart: action.payload.cart };
    case "DECREASE_ITEM":
      toast.error("Item Quantity Decreased");
      return { cart: action.payload.cart };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}
