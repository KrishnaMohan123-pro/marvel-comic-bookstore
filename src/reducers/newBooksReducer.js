import { toast } from "react-toastify";
const initialState = [];
export default function newBooksReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_BOOK_ADDED":
      toast.success("Book added Successfully");
      return action.payload;
    case "FETCHED_DATA":
      return action.payload;
    default:
      return state;
  }
}
