import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

export default store;
