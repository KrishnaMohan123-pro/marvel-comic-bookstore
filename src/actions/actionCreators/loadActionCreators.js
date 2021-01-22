import {
  _FIREBASE_LOADING,
  _DATA_LOADING,
  _STOP_LOADING,
} from "../actionsList/loadActionsList";

export function firebaseLoadingAction() {
  return { type: _FIREBASE_LOADING };
}
export function dataLoadingAction() {
  return { type: _DATA_LOADING };
}
export function stopLoadingAction() {
  return { type: _STOP_LOADING };
}
