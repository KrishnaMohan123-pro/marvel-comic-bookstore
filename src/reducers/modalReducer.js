import {
  _OPEN_LOGIN_MODAL,
  _OPEN_SIGNUP_MODAL,
  _CLOSE_MODAL,
} from "../actions/actionsList/modalActionsList";

const initialState = {
  loginModalVisible: false,
  signupModalVisible: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case _OPEN_LOGIN_MODAL:
      return {
        loginModalVisible: true,
        signupModalVisible: false,
      };

    case _OPEN_SIGNUP_MODAL:
      return {
        loginModalVisible: false,
        signupModalVisible: true,
      };

    case _CLOSE_MODAL:
      return initialState;

    default:
      return state;
  }
}
