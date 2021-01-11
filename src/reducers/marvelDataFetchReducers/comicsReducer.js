const initialState = {
  characters: [],
  creators: [],
  description: "",
  id: "",
  image: "",
  price: 0,
  publishDate: "",
  title: "",
};

export default function comicsReducer(state = initialState, action) {
  switch (action.type) {
    case "COMICS_DATA_LOAD":
      return action.payload;
    case "COMICS_DATA_LOAD_ERROR":
      return action.payload;
    default:
      return state;
  }
}
