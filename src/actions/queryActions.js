import { querySearchedAction } from "./actionCreators/queryActionCreator";

export function querySearched(name) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(querySearchedAction(name));
  };
}
