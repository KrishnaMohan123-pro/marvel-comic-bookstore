import React, { Fragment } from "react";
import Cart from "./Cart";
import SignOut from "./SignOut";
import Account from "./Account";

export default function SignInLinks() {
  return (
    <Fragment>
      <SignOut />
      <Account />
      <Cart />
    </Fragment>
  );
}
