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
    case "CHARACTER_DATA_LOAD":
      return action.payload;
    case "CHARACTER_DATA_LOAD_ERROR":
      return action.payload;
    default:
      return state;
  }
}
