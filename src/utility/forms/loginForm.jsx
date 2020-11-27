import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { login } from "../../actions/authActions";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(user));
    setUser(user);
    dispatch({ type: "CLOSE_MODAL" });
  }
  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    setUser((prevValue) => {
      switch (id) {
        case "email":
          return {
            email: value,
            password: prevValue.password,
          };
        case "password":
          return {
            email: prevValue.email,
            password: value,
          };
        default:
          return prevValue;
      }
    });
  }
  return (
    <form className="p-2" style={{ width: "400px" }} onSubmit={handleSubmit}>
      <TextField
        className="mt-2"
        color="primary"
        id="email"
        label="Email"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
      />
      <br />
      <TextField
        className="mt-2"
        color="primary"
        id="password"
        label="Password"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
      />
      <br />
      <Button
        type="submit"
        className="mt-2"
        color="primary"
        variant="contained"
      >
        Login
      </Button>
    </form>
  );
}
