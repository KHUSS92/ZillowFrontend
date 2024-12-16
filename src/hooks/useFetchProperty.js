import { useState, useEffect } from "react";
import { fetchPropertyById } from "../services/api";

const useFetchProperty = (propertyId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPropertyById(propertyId);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [propertyId]);

  return { data, loading, error };
};

export default useFetchProperty;
