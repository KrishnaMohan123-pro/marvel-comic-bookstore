import { createStore, applyMiddleware } from "redux";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);
