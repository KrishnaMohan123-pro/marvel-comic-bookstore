import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import developerRoutes from "./utility/Routes/developerRoutes";
import adminRoutes from "./utility/Routes/adminRoutes";
import { toast } from "react-toastify";
export default function ProtectedRoute({ component: Component, ...rest }) {
  console.log(rest);
  const loggedIn = useSelector((state) => state.loggedIn);
  const role = useSelector((state) => state.auth.user.role);
  console.log(role);
  const dispatch = useDispatch();

  if (!loggedIn) {
    toast.error("Please login First");
    dispatch({ type: "OPEN_SIGNUP_MODAL" });
    return <Redirect to="/" />;
  }
  if (
    role &&
    role === "developer" &&
    !developerRoutes.includes({ ...rest }.path)
  ) {
    return <Redirect to="/restricted" />;
  } else if (
    role &&
    role === "admin" &&
    !adminRoutes.includes({ ...rest }.path)
  ) {
    return <Redirect to="/restricted" />;
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
