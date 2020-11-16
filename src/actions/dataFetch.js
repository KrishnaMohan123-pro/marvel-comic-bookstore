import fetchApi from "../services/marvel";

export const fetchIdByName = (name) => {
  const endPoint = `characters?name${name}`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchComicsByCharacterId = (id)=>{
    const endPoint = `characters/${id}/comics`;
    const response = await fetchApi(endPoint);
    const json = await response.json();
    return json;
}

export const fetchComicsByComicsId = (id)=>{
    const endPoint = `comics/${id}`;
    const response = await fetchApi(endPoint);
    const json = await response.json();
    return json;
}
