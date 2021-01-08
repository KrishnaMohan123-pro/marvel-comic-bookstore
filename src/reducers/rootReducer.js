import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import dialogReducer from "./dialogReducers";
import loaderReducer from "./loaderReducer";
import modalReducer from "./modalReducer";
import searchReducer from "./searchReducer";
import seriesNameReducer from "./seriesReducers/seriesNameReducer";
import totalSeriesReducer from "./seriesReducers/totalSeriesReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  dialog: dialogReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  loader: loaderReducer,
  modal: modalReducer,
  search: searchReducer,
  seriesName: seriesNameReducer,
  totalSeries: totalSeriesReducer,
});
export default persistReducer(persistConfig, rootReducer);
