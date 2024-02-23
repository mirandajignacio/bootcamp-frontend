import { useState } from "react";

const useHello = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchHello = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, data, fetchHello };
};

export { useHello };
