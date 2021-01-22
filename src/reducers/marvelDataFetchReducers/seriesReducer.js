import {
  _SERIES_DATA_LOAD,
  _SERIES_DATA_LOAD_ERROR,
} from "../../actions/actionsList/dataFetchActionsList";

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
    case _SERIES_DATA_LOAD:
      return action.payload;
    case _SERIES_DATA_LOAD_ERROR:
      return action.payload;
    default:
      return state;
  }
}
