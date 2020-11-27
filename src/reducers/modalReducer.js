const initialState = {
  loginModalVisible: false,
  signupModalVisible: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return {
        loginModalVisible: true,
        signupModalVisible: false,
      };

    case "OPEN_SIGNUP_MODAL":
      return {
        loginModalVisible: false,
        signupModalVisible: true,
      };

    case "CLOSE_MODAL":
      return initialState;

    default:
      return state;
  }
}
