const intiialState = false;

export default function loggedIn(state = intiialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return true;
    case "LOGGED_OUT":
      return false;
    default:
      return state;
  }
}
