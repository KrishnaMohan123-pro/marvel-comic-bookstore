import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
export default rootReducer;
