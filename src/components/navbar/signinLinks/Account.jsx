import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <Link to="/account">
      <li className="nav-item active">
        <span className="nav-link" type="button">
          {/* <i className="fas fa-user"></i> */}
          ACCOUNT
          <span className="sr-only">(current)</span>
        </span>
      </li>
    </Link>
  );
}
