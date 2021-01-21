import { _QUERY_SEARCHED } from "../actionsList/queryActionsList";
export function querySearchedAction(name) {
  return { type: _QUERY_SEARCHED, payload: name };
}
