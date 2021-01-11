import {
  fetchComicsWithStartName,
  fetchSeriesByStartName,
  fetchWithStartName,
} from "../dataFetch";

export function search(name, sort, filter) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_DATA_LOADING" });
    switch (filter) {
      case "characters":
        fetchWithStartName(name, sort).then((res) => {
          dispatch({
            type: "DATA_LOAD",
            payload: { total: res.data.total, results: res.data.results },
          });
          dispatch({ type: "STOP_LOADING" });
        });
        break;
      case "series":
        fetchSeriesByStartName(name, "", sort, "").then((res) => {
          dispatch({
            type: "DATA_LOAD",
            payload: { total: res.data.total, results: res.data.results },
          });
          dispatch({ type: "STOP_LOADING" });
        });
        break;
      case "comics":
        fetchComicsWithStartName(name, sort).then((res) => {
          console.log(res);
          dispatch({
            type: "DATA_LOAD",
            payload: { total: res.data.total, results: res.data.results },
          });
          dispatch({ type: "STOP_LOADING" });
        });
        break;
      default:
    }
  };
}

export function dropDown(startName) {
  return (dispatch, getState, { getFirebase }) => {
    fetchWithStartName(startName, "").then((res) => {
      const characters = [];
      res.data.results.forEach((result) => {
        characters.push({ name: result.name, id: result.id });
      });
      dispatch({ type: "SEARCHED_NAMES", payload: { characters: characters } });
    });
  };
}

export function clearDropDown() {
  return (dispatch, getState, { getFirebase }) => {
    console.log("cleared Search");
    dispatch({ type: "CLEAR_SEARCH" });
  };
}
