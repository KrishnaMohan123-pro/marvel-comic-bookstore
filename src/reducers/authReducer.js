import { toast } from "react-toastify";
import {
  _INITIALISE_USER,
  _LOG_IN,
  _SIGN_IN,
  _SIGNED_OUT,
  _SIGNOUT_ERROR,
  _SIGN_IN_ERR,
  _LOG_IN_ERR,
} from "../actions/actionsList/authActionsList";

const initialState = { user: {}, uid: "" };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case _INITIALISE_USER:
      return {
        user: action.payload.user,
        uid: action.payload.uid,
      };
    case _SIGN_IN:
      toast.success("SignIn Successful");
      return {
        user: action.payload.user,
        uid: action.payload.uid,
      };
    case _SIGN_IN_ERR:
      toast.error("Error is " + action.payload.error);
      return state;
    case _LOG_IN:
      toast.success("Login Successful");
      return {
        user: action.payload.user,
        uid: action.payload.uid,
      };
    case _LOG_IN_ERR:
      toast.error("Cannot Login :: " + action.payload.error);
      return state;
    case _SIGNED_OUT:
      toast.success("User Signed Out");
      return initialState;
    case _SIGNOUT_ERROR:
      toast.error("Error while signing out : " + action.payload.error);
      return state;
    case "UPDATE_IMAGE":
      toast.success("Profile picture updated");
      return {
        user: { ...state.user, photoURL: action.payload.photoURL },
        uid: state.uid,
      };
    default:
      return state;
  }
}
