const initialState = { name: "", showSearchBody: false };

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCHED":
      return { name: action.payload.name, showSearchBody: true };

    case "SEARCH_START_WITH":
      return { name: action.payload.name, showSearchBody: true };
    case "CLEAR_SEARCH":
      return initialState;

    default:
      return state;
  }
}
