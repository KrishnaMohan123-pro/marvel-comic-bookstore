import React from "react";
import SignUpForm from "../../../utility/signupForm/index";
export default function SignUpModal() {
  return (
    <li className="nav-item active">
      <span
        type="button"
        className="nav-link"
        data-toggle="modal"
        data-target="#signupModal"
      >
        SIGNUP
      </span>

      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content no-gutters">
            <div className="modal-body" style={{ padding: 0 }}>
              <div className="row no-gutters">
                <div className="col-4 bg-primary text-white">
                  WELCOME BACK MESSAGE
                </div>
                <div className="col-8 p-5">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
