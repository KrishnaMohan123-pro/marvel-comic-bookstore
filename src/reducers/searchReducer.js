const initialState = { seriesList: [] };

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_SERIES_LIST":
      return { seriesList: action.payload.seriesList };
    case "CLEAR_LIST":
      return { seriesList: [] };
    default:
      return state;
  }
}
