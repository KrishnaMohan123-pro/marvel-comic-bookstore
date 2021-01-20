import {
  _NEW_BOOK_ADD,
  _FETCH_NEW_BOOKS,
} from "../actionsList/newBooksActionsList";

export function addNewBookAction(booksList) {
  return { type: _NEW_BOOK_ADD, payload: booksList };
}
export function fetchNewBooksAction(booksList) {
  return { type: _FETCH_NEW_BOOKS, payload: booksList };
}
