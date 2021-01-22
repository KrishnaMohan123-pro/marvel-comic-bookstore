import { _QUERY_SEARCHED } from "../actions/actionsList/queryActionsList";
const initialState = "";
export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case _QUERY_SEARCHED:
      return action.payload;

    default:
      return state;
  }
}
