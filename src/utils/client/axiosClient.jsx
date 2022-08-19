import axios from "axios";

export async function postToApi(url, data) {
  const response = await axios.post(url, data);
  return response;
}
