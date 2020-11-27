import { createStore, applyMiddleware } from "redux";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "../rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const persistor = persistStore(store);

export { store, persistor };
