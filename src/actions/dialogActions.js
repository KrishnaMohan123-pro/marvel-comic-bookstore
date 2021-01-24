import {
  openDialogAction,
  closeDialogAction,
} from "./actionCreators/dialogActionsCreator";
export function openDialog(name) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(openDialogAction(name));
  };
}

export function closeDialog(name) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(closeDialogAction(name));
  };
}
