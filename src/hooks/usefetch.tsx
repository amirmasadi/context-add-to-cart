import { useEffect, useState } from "react";

export type Props = {
  url: string;
};

export interface apiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export type hookOutput = {
  data: apiResponse[] | null;
  error: string;
  loading: boolean;
};

export default function usefetch(url: string): hookOutput {
  const [data, setData] = useState<apiResponse[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
}
