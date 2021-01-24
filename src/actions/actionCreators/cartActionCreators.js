import {
  _ADD_TO_CART,
  _REMOVE_FROM_CART,
  _INCREASE,
  _DECREASE,
  _INITIALISE_CART,
  _CLEAR_CART,
} from "../actionsList/cartActionsList";

export function addItemAction(newCart) {
  return { type: _ADD_TO_CART, payload: { cart: newCart } };
}

export function removeItemAction(newCart) {
  return { type: _REMOVE_FROM_CART, payload: { cart: newCart } };
}
export function increaseItemAction(newCart) {
  return { type: _INCREASE, payload: { cart: newCart } };
}
export function decreaseItemAction(newCart) {
  return { type: _DECREASE, payload: { cart: newCart } };
}
export function initialiseCartAction(cart) {
  return { type: _INITIALISE_CART, payload: { cart: cart } };
}

export function clearCartAction() {
  return { type: _CLEAR_CART };
}
