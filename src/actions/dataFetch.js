import fetchApi from "../services/marvel";

export const fetchIdByName = async (name) => {
  const endPoint = `characters?name=${name}`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchComicsByCharacterId = async (id) => {
  const endPoint = `characters/${id}/comics?`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchComicsByName = async (name) => {
  const doc = await fetchIdByName(name);
  const id = doc.data.results[0].id;
  const comics = await fetchComicsByCharacterId(id);
  return comics;
};
export const fetchComicsByComicsId = async (id) => {
  const endPoint = `comics/${id}?`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchSeriesByName = async (name) => {
  const endPoint = `series?title=${name}`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchSeriesBySeriesID = async (id) => {
  const endPoint = `series/${id}?`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchWithStartName = async (name) => {
  const endPoint = `characters?nameStartsWith=${name}&limit=100`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchSeriesByCharacterId = async (id) => {
  const endPoint = `characters/${id}/series?limit=10`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};

export const fetchSeriesByStartName = async (name) => {
  const endPoint = `series?titleStartsWith=${name}&limit=100`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};
export const fetchCharacterByCharacterId = async (id) => {
  const endPoint = `characters/${id}?`;
  const response = await fetchApi(endPoint);
  const json = await response.json();
  return json;
};
