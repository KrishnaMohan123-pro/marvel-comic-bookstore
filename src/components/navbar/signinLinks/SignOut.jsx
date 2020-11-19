import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/authActions";

export default function Signout() {
  const dispatch = useDispatch();
  function handleSignout(e) {
    dispatch(logout());
    // document.querySelector(".modal-backdrop").classList.remove("d-none");
  }
  return (
    <li className="nav-item active">
      <span type="button" className="nav-link" onClick={handleSignout}>
        SIGNOUT
      </span>
    </li>
  );
}
