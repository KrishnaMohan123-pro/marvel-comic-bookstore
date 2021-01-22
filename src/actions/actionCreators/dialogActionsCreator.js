import { _CLOSE_DIALOG } from "../actionsList/dialogActionsList";

export function openDialogAction(name) {
  return { type: `OPEN_${name}_DIALOG` };
}
export function closeDialogAction() {
  return { type: _CLOSE_DIALOG };
}
