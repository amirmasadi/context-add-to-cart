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

  let localData = localStorage.getItem("products");
  async function fetchData() {
    if (localData && JSON.parse(localData).url === url) {
      setLoading(false);
      setData(JSON.parse(localData).data);
    } else {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        localStorage.setItem("products", JSON.stringify({ url, data: json }));
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
}
