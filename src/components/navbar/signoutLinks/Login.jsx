import React from "react";
import LoginInForm from "../../../utility/loginForm/index";
export default function LoginModal() {
  return (
    <li className="nav-item active">
      <span
        type="button"
        className="nav-link"
        data-toggle="modal"
        data-target="#loginModal"
      >
        LOGIN
      </span>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content no-gutters">
            <div className="modal-body" style={{ padding: 0 }}>
              <div className="row no-gutters">
                <div className="col-4 bg-primary text-white pt-5">
                  WELCOME BACK
                </div>
                <div className="col-8 p-5">
                  <LoginInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
