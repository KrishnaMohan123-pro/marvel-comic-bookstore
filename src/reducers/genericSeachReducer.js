const intialState = { total: 0, results: [] };

export default function genericSearchReducer(state = intialState, action) {
  switch (action.type) {
    case "DATA_LOAD":
      return action.payload;
    default:
      return state;
  }
}
