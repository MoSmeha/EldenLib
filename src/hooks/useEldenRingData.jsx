import { useState, useEffect } from "react";
import { fetchEldenRingData } from "../apis/index";

const useEldenRingData = (query, category, limit) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchEldenRingData(
          category,
          limit,
          controller.signal
        );
        setItems(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setItems([]);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [category, limit]); // Remove query dependency to fetch all data regardless of search query

  return { items, isLoading, error };
};
export default useEldenRingData;
