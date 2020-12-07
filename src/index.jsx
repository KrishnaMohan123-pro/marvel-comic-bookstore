import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { PersistGate } from "redux-persist/integration/react";
import firebase from "./services/firebase/index";
import { store, persistor } from "./reducers/store/store";
import App from "./App";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        <ToastContainer />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
