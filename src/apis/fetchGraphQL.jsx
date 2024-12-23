import { API_BASE_URL } from "./index";

async function fetchGraphQL(query) {
  const response = await fetch(`${API_BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok)
    throw new Error(`Error fetching data: ${response.statusText}`);
  return response.json();
}
export default fetchGraphQL;
