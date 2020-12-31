import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FacebookLoginButton from "../../components/Buttons/facebookLoginButton";
import GoogleSignInButton from "../../components/Buttons/googleSignInButton";
import { login } from "../../actions/authActions";
import TextField from "@material-ui/core/TextField";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(user));
    setUser(user);
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
      <p style={{ margin: "1rem auto", color: "black" }}>---OR---</p>

      <GoogleSignInButton />
      <br />
      <FacebookLoginButton />

      <br />
      <Button
        onClick={() => {
          dispatch({ type: "CLOSE_MODAL" });
          setTimeout(() => {
            dispatch({ type: "OPEN_SIGNUP_MODAL" });
          }, 200);
        }}
        style={{ marginTop: "6px" }}
      >
        Need a new account?
      </Button>
    </section>
  );
}
