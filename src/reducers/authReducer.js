import { toast } from "react-toastify";

const initialState = { user: {}, uid: "" };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "INITIALISE_USER":
      return {
        user: action.payload.user,
        uid: action.payload.uid,
      };
    case "SIGN_IN":
      toast.success("SignIn Successful");
      return {
        user: action.payload.user,
        uid: action.payload.uid,
      };
    case "SIGN_IN_ERR":
      toast.error("Error is " + action.payload.error);
      return state;
    case "LOG_IN":
      toast.success("Login Successful");
      return {
        user: action.payload.user,
        uid: action.payload.uid,
      };
    case "LOG_IN_ERR":
      toast.error("Cannot Login :: " + action.payload.error);
      return state;
    case "SIGNED_OUT":
      toast.success("User Signed Out");
      return initialState;
    case "SIGNEDOUT_ERROR":
      toast.error("Error while signing out : " + action.payload.error);
      return state;
    default:
      return state;
  }
}
