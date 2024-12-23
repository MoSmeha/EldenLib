import { API_BASE_URL } from "../utilities/index";
async function fetchREST(endpoint, limit) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}?limit=${limit}`);
  if (!response.ok)
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  return response.json();
}
export default fetchREST;
