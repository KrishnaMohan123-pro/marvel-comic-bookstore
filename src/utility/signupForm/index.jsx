import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/authActions";

export default function SignInForm() {
  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    phone: "",
  });
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ email: "", fname: "", lname: "", password: "", phone: "" });
    setTimeout(() => {
      document.getElementsByClassName("modal-backdrop")[0].remove();
      document.getElementById("signupModal").remove();
    }, 200);
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevValue) => {
      switch (name) {
        case "email":
          return {
            fname: prevValue.fname,
            lname: prevValue.lname,
            email: value,
            password: prevValue.password,
            phone: prevValue.phone,
          };
        case "password":
          return {
            fname: prevValue.fname,
            lname: prevValue.lname,
            email: prevValue.email,
            password: value,
            phone: prevValue.phone,
          };
        case "fname":
          return {
            fname: value,
            lname: prevValue.lname,
            email: prevValue.email,
            password: prevValue.password,
            phone: prevValue.phone,
          };
        case "lname":
          return {
            fname: prevValue.fname,
            lname: value,
            email: prevValue.email,
            password: prevValue.password,
            phone: prevValue.phone,
          };
        case "phone":
          return {
            fname: prevValue.fname,
            lname: prevValue.lname,
            email: prevValue.email,
            password: prevValue.password,
            phone: value,
          };
        default:
          return prevValue;
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mt-2"
        placeholder="FIRST NAME"
        type="text"
        name="fname"
        onChange={handleChange}
      />
      <input
        className="mt-2"
        placeholder="LAST NAME"
        type="text"
        name="lname"
        onChange={handleChange}
      />
      <input
        className="mt-2"
        placeholder="EMAIL"
        type="email"
        name="email"
        onChange={handleChange}
      />
      <input
        className="mt-2"
        placeholder="PASSWORD"
        type="password"
        name="password"
        onChange={handleChange}
      />
      <input
        className="mt-2"
        placeholder="PHONE"
        type="phone"
        name="phone"
        onChange={handleChange}
      />
      <button className="btn btn-primary mt-2 px-auto">Submit</button>
    </form>
  );
}
