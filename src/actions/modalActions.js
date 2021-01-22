import {
  openModalAction,
  closeModalAction,
} from "./actionCreators/modalActionCreators";

export function openModal(name) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(openModalAction(name));
  };
}
export function closeModal() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(closeModalAction());
  };
}
