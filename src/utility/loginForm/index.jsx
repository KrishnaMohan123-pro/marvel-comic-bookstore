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
      <input type="email" name="email" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button id="hideModal" type="submit">
        Submit
      </button>
    </form>
  );
}
