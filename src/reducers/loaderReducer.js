const initialState = { profile: false, data: false };

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case "START_FIREBASE_LOADING":
      return { profile: true, data: false };
    case "START_DATA_LOADING":
      return { profile: false, data: true };
    case "STOP_LOADING":
      return initialState;
    default:
      return state;
  }
}
