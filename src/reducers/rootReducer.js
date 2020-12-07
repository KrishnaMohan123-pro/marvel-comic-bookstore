import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import searchReducer from "./searchReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modal: modalReducer,
  search: searchReducer,
});
export default persistReducer(persistConfig, rootReducer);
