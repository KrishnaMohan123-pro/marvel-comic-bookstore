const initialState = {
  characters: [],
  comics: [],
  creators: [],
  description: "",
  endYear: "",
  id: "",
  image: "",
  startYear: "",
  title: "",
};

export default function seriesReducer(state = initialState, action) {
  switch (action.type) {
    case "SERIES_DATA_LOAD":
      return action.payload;
    case "SERIES_DATA_LOAD_ERROR":
      return action.payload;
    default:
      return state;
  }
}
