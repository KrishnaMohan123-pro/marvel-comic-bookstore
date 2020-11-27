import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
export default function SignInForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(user));
    // document.querySelector(".modal-backdrop").classList.add("d-none");
    setTimeout(() => {
      document.getElementsByClassName("modal-backdrop")[0].remove();
      document.getElementById("loginModal").remove();
    }, 200);
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevValue) => {
      switch (name) {
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
    <form onSubmit={handleSubmit}>
      <input
        className="mt-2"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        className="mt-2"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button className="btn btn-primary mt-2" id="hideModal" type="submit">
        Submit
      </button>
    </form>
  );
}
