import { toast } from "react-toastify";

const initialState = { user: {}, loggedIn: false };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      toast("SignIn Successful");
      return { user: action.payload.user, loggedIn: true };
    case "SIGN_IN_ERR":
      toast("Error is " + action.payload.error);
      return state;
    case "LOG_IN":
      toast("Login Successful");
      return { user: action.payload.user, loggedIn: true };
    case "LOG_IN_ERR":
      toast("Cannot Login :: " + action.payload.error);
      return state;
    case "SIGNED_OUT":
      toast("User Signed Out");
      return initialState;
    case "SIGNEDOUT_ERROR":
      toast("Error while signing out : " + action.payload.error);
      return state;
    default:
      return state;
  }
}
