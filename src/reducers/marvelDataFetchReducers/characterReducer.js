import {
  _CHARACTER_DATA_LOAD,
  _CHARACTER_DATA_LOAD_ERROR,
} from "../../actions/actionsList/dataFetchActionsList";
const initialState = {
  comics: [],
  description: "",
  id: "",
  image: "",
  name: "",
  series: [],
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case _CHARACTER_DATA_LOAD:
      return action.payload;
    case _CHARACTER_DATA_LOAD_ERROR:
      return action.payload;
    default:
      return state;
  }
}
