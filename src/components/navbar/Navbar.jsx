import React from "react";
import SignOutLinks from "./signoutLinks/SignOutLinks";
import SignInLinks from "./signinLinks/SignInLinks";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const data = useSelector((state) => state);
  const loggedIn = !data.firebase.auth.isEmpty;
  const links = loggedIn ? <SignInLinks /> : <SignOutLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/">
        <span className="navbar-brand" href="#">
          Marvel
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">{links}</ul>
      </div>
    </nav>
  );
}
