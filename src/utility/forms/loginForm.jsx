import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { login } from "../../actions/authActions";

export default function LoginForm() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(user));
    setUser(user);
    if (loggedIn) dispatch({ type: "CLOSE_MODAL" });
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
    <section className="login-form">
      <form className="p-2" style={{ width: "400px" }} onSubmit={handleSubmit}>
        <TextField
          className="mt-2"
          color="primary"
          id="email"
          label="Email"
          style={{ width: "100%" }}
          variant="outlined"
          onChange={handleChange}
          type="email"
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
          type="password"
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
      <p style={{ margin: "1rem auto" }}>---OR---</p>
      <ButtonGroup>
        <Button color="secondary" variant="contained">
          <i class="fab fa-google mr-1"></i>Google
        </Button>
        <Button color="primary" variant="contained">
          <i class="fab fa-facebook mr-1"></i>Facebook
        </Button>
      </ButtonGroup>
    </section>
  );
}
