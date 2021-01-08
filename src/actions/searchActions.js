export function addToList(list) {
  return (dispatch, getState, { getFirebase }) => {
    const series = getState().search.seriesList;
    list.forEach((item) => series.push(item));
    dispatch({ type: "LOAD_SERIES_LIST", payload: { seriesList: series } });
  };
}
export function clearList() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "CLEAR_LIST", payload: [] });
  };
}
