import { fetchComicsByComicsId } from "../dataFetch";
import { toast } from "react-toastify";

export function fetchComics(id) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: "START_DATA_LOADING" });
    fetchComicsByComicsId(id)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "COMICS_DATA_LOAD",
          payload: {
            characters: res.data.results[0].characters.items,
            creators: res.data.results[0].creators.items,
            description: res.data.results[0].description,
            id: res.data.results[0].id,
            image:
              res.data.results[0].thumbnail.path +
              "." +
              res.data.results[0].thumbnail.extension,
            price: res.data.results[0].prices[0].price,
            publishDate: res.data.results[0].dates[0].date.slice(0, 10),
            title: res.data.results[0].title,
          },
        });
        dispatch({ type: "STOP_LOADING" });
      })
      .catch((e) => {
        toast.error("Somthing went wrong");
        dispatch({ type: "STOP_LOADING" });
        dispatch({
          type: "COMICS_DATA_LOAD_ERROR",
          payload: { error: "NO BOOK WITH THE ID AVAILABLE" },
        });
      });
  };
}
