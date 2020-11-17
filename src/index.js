import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./reducers/store/store";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./services/firebase/index";
import { createFirestoreInstance } from "redux-firestore";
import { ToastContainer } from "react-toastify";

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
        <App />
        <ToastContainer />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
