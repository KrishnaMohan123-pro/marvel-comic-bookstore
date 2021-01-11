import { fetchCharacterByCharacterId } from "../dataFetch";
import { toast } from "react-toastify";

export function fetchCharacter(id) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_DATA_LOADING" });
    fetchCharacterByCharacterId(id)
      .then((res) => {
        dispatch({
          type: "CHARACTER_DATA_LOAD",
          payload: {
            comics: res.data.results[0].comics.items,
            description: res.data.results[0].description,
            id: res.data.results[0].id,
            image:
              res.data.results[0].thumbnail.path +
              "." +
              res.data.results[0].thumbnail.extension,
            name: res.data.results[0].name,
            series: res.data.results[0].series.items,
          },
        });
        dispatch({ type: "STOP_LOADING" });
      })
      .catch((e) => {
        toast.error("Something when wrong");
        dispatch({ type: "STOP_LOADING" });
        dispatch({
          type: "CHARACTER_DATA_LOAD_ERROR",
          payload: { error: "NO CHARACTER WITH THE ID AVAILABLE" },
        });
      });
  };
}
