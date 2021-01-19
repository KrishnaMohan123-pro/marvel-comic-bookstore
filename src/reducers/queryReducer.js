const initialState = "";
export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case "QUERY_SEARCHED":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
