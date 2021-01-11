const initialState = { cart: false, data: false };

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case "START_CART_LOADING":
      return { cart: true, data: false };
    case "START_DATA_LOADING":
      return { cart: false, data: true };
    case "STOP_LOADING":
      return initialState;
    default:
      return state;
  }
}
