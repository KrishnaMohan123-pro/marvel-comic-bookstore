import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import characterReducer from "./marvelDataFetchReducers/characterReducer";
import comicsReducer from "./marvelDataFetchReducers/comicsReducer";
import dialogReducer from "./dialogReducers";
import dropDownOptionsReducer from "./dropDownOptionsReducer";
import genericSearchReducer from "./genericSeachReducer";
import loaderReducer from "./loaderReducer";
import modalReducer from "./modalReducer";
import seriesReducer from "./marvelDataFetchReducers/seriesReducer";
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
  character: characterReducer,
  comics: comicsReducer,
  dialog: dialogReducer,
  dropDown: dropDownOptionsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  genericSearch: genericSearchReducer,
  loader: loaderReducer,
  modal: modalReducer,
  series: seriesReducer,
  seriesName: seriesNameReducer,
  totalSeries: totalSeriesReducer,
});
export default persistReducer(persistConfig, rootReducer);
