import { fetchSeriesBySeriesID } from "../dataFetch";
import { toast } from "react-toastify";

export function fetchSeries(id) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_DATA_LOADING" });
    fetchSeriesBySeriesID(id)
      .then((res) => {
        dispatch({
          type: "SERIES_DATA_LOAD",
          payload: {
            characters: res.data.results[0].characters.items,
            comics: res.data.results[0].comics.items,
            creators: res.data.results[0].creators.items,
            description: res.data.results[0].description,
            endYear: res.data.results[0].endYear,
            id: res.data.results[0].id,
            image:
              res.data.results[0].thumbnail.path +
              "." +
              res.data.results[0].thumbnail.extension,
            startYear: res.data.results[0].startYear,
            title: res.data.results[0].title,
          },
        });
        dispatch({ type: "STOP_LOADING" });
      })
      .catch((e) => {
        toast.error("Something went Wrong");
        dispatch({
          type: "SERIES_DATA_LOAD_ERROR",
          payload: { error: "NO SERIES WITH THE ID AVAILABLE" },
        });
        dispatch({ type: "STOP_LOADING" });
      });
  };
}
