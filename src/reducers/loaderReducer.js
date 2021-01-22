import {
  _FIREBASE_LOADING,
  _DATA_LOADING,
  _STOP_LOADING,
} from "../actions/actionsList/loadActionsList";

const initialState = { profile: false, data: false };

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case _FIREBASE_LOADING:
      return { profile: true, data: false };
    case _DATA_LOADING:
      return { profile: false, data: true };
    case _STOP_LOADING:
      return initialState;
    default:
      return state;
  }
}
