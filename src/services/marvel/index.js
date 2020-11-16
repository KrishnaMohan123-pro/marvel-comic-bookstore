import config from "./config";

const Marvel_Base_Url = "https://gateway.marvel.com/v1/public/";
export default async function fetchApi(
  endPoint,
  payload = {},
  method = "get",
  headers = {}
) {
  let path = `${Marvel_Base_Url}${endPoint}&apikey=${config.marvel.apiKey}`;

  const headersObject = {
    "Content-Type": "application/json",
    ...headers,
  };
  let request = {};
  //   For post method
  // Not required in this app
  if (method.toLowerCase() === "post" || method.toLowerCase() === "put") {
    request = {
      body: JSON.stringify(payload),
      headers: headersObject,
      method: method.toLowerCase(),
    };
  } else {
    request = {
      headers: headersObject,
      method: method.toLowerCase(),
    };
  }
  try {
    return fetch(path, request);
  } catch (e) {
    const stringError = e && e.toString && e.toString();
    const type =
      stringError === "TypeError: Network request failed"
        ? "networkError"
        : "unknown";
    const error = {
      text: stringError,
      type,
    };
    throw error;
  }
}
