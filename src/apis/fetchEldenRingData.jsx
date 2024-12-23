import { fetchREST, fetchGraphQL, buildGraphQLQuery } from "./index";
import { REST_CATEGORIES } from "../utilities/index";
async function fetchEldenRingData(category, limit) {
  try {
    if (REST_CATEGORIES[category]) {
      const result = await fetchREST(REST_CATEGORIES[category], limit);
      return result.data || [];
    }

    const query = buildGraphQLQuery(category, limit);
    const result = await fetchGraphQL(query);

    if (result.data && result.data[category]) {
      return result.data[category];
    }

    throw new Error("No data found for the selected category.");
  } catch (error) {
    if (error.name === "AbortError") {
      throw error;
    }
    throw new Error(`Failed to fetch ${category}: ${error.message}`);
  }
}
export default fetchEldenRingData;
