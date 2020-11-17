import { toast } from "react-toastify";

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      toast("SignIn Successful");
      return state;
    case "SIGN_IN_ERR":
      toast("Error is " + action.payload.error);
      return state;
    case "LOG_IN":
      toast("Login Successful");
      return state;
    case "LOG_IN_ERR":
      toast("Error while logging in :" + action.payload.error);
      return state;
    case "SIGNED_OUT":
      toast("User Signed Out");
      return state;
    case "SIGNEDOUT_ERROR":
      toast("Error while signing out : " + action.payload.error);
      return state;
    default:
      return state;
  }
}
