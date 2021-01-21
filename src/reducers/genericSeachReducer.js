import { _SEARCH_DATA_LOAD } from "../actions/actionsList/dataFetchActionsList";
const intialState = { total: 0, results: [] };

export default function genericSearchReducer(state = intialState, action) {
  switch (action.type) {
    case _SEARCH_DATA_LOAD:
      return action.payload;
    default:
      return state;
  }
}
