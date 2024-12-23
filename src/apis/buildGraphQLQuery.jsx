import { BASE_FIELDS } from "./index";
import { CATEGORY_FIELDS } from "../utilities/index";
export default function buildGraphQLQuery(category, limit) {
  return `
    query {
      ${category}(limit: ${limit}) {
        ${BASE_FIELDS}
        ${CATEGORY_FIELDS[category]}
      }
    }
  `;
}
