import {
  _INITIALISE_USER,
  _LOG_IN,
  _SIGN_IN,
  _SIGNED_OUT,
  _SIGNOUT_ERROR,
  _SIGN_IN_ERR,
  _LOG_IN_ERR,
} from "../actionsList/authActionsList";

export function signupAction(user, uid) {
  return { type: _SIGN_IN, payload: { user: user, uid: uid } };
}
export function signupErrorAction(err) {
  return { type: _SIGN_IN_ERR, payload: { error: err } };
}
export function loginAction(user, uid) {
  return { type: _LOG_IN, payload: { user: user, uid: uid } };
}
export function loginErrorAction(err) {
  return {
    type: _LOG_IN_ERR,
    payload: { error: err.message },
  };
}
export function signoutAction() {
  return { type: _SIGNED_OUT };
}
export function signoutErrorAction(err) {
  return { type: _SIGNED_OUT, payload: { error: err } };
}
export function initialiseUserAction(user, uid) {
  return { type: _INITIALISE_USER, payload: { user: user, uid: uid } };
}
