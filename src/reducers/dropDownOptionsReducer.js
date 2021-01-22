const initialState = { characters: [] };

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCHED_NAMES":
      return action.payload;
    case "CLEAR_SEARCH":
      return initialState;
    default:
      return state;
  }
}
