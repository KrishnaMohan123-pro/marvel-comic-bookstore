import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { signUp } from "../../actions/authActions";

export default function SignupForm() {
  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    phone: "",
  });
  const dispatch = useDispatch();
  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    setUser((prevValue) => {
      switch (id) {
        case "email":
          return {
            email: value,
            fname: prevValue.fname,
            lname: prevValue.lname,
            password: prevValue.password,
            phone: prevValue.phone,
          };
        case "fname":
          return {
            email: prevValue.email,
            fname: value,
            lname: prevValue.lname,
            password: prevValue.password,
            phone: prevValue.phone,
          };
        case "lname":
          return {
            email: prevValue.email,
            fname: prevValue.fname,
            lname: value,
            password: prevValue.password,
            phone: prevValue.phone,
          };
        case "password":
          return {
            email: prevValue.email,
            fname: prevValue.fname,
            lname: prevValue.lname,
            password: value,
            phone: prevValue.phone,
          };
        case "phone":
          return {
            email: prevValue.email,
            fname: prevValue.fname,
            lname: prevValue.lname,
            password: prevValue.password,
            phone: value,
          };
        default:
          return prevValue;
      }
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(signUp(user));
    dispatch({ type: "CLOSE_MODAL" });
  }
  return (
    <form className="p-2" style={{ width: "400px" }} onSubmit={onFormSubmit}>
      <TextField
        className="mt-2"
        color="primary"
        id="fname"
        label="First Name"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        className="mt-2"
        color="primary"
        id="lname"
        label="Last Name"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        className="mt-2"
        color="primary"
        id="phone"
        label="Phone Number"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
      />
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
