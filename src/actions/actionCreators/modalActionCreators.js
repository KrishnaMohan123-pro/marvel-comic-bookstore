import {
  _OPEN_LOGIN_MODAL,
  _OPEN_SIGNUP_MODAL,
  _CLOSE_MODAL,
} from "../actionsList/modalActionsList";
export function openLoginModalAction() {
  return { type: _OPEN_LOGIN_MODAL };
}
export function openSignupModalAction() {
  return { type: _OPEN_SIGNUP_MODAL };
}
export function closeModalAction() {
  return { type: _CLOSE_MODAL };
}
