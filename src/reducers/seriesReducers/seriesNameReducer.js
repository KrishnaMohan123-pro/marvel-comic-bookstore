const initialState = { name: "" };
export default function seriesNameReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCHED_NAME":
      return { name: action.payload.name };
    default:
      return state;
  }
}
