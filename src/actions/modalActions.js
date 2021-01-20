import {
  openLoginModalAction,
  openSignupModalAction,
  closeModalAction,
} from "./actionCreators/modalActionCreators";

export function openLoginModal() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(openLoginModalAction());
  };
}
export function openSignupModal() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(openSignupModalAction());
  };
}
export function closeModal() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(closeModalAction());
  };
}
