import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./services/firebase/index";
import { store } from "./reducers/store/store";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
