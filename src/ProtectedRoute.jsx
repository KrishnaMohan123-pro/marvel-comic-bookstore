import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function ProtectedRoute({ component: Component, ...rest }) {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  if (!loggedIn) {
    toast.error("Please login First");
    dispatch({ type: "OPEN_SIGNUP_MODAL" });
    return <Redirect to="/" />;
  }
  return (
    <Route
      render={() => {
        return <Component />;
      }}
      {...rest}
    />
  );
}
