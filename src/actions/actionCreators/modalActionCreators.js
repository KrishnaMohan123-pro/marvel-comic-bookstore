import { _CLOSE_MODAL } from "../actionsList/modalActionsList";
export function openModalAction(name) {
  return { type: `OPEN_${name}_MODAL` };
}
export function closeModalAction() {
  return { type: _CLOSE_MODAL };
}
