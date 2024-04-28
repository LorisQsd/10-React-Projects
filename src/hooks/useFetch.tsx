import { useEffect, useState } from 'react';

type TData = {
  loading: boolean;
  error: boolean;
  data?: {};
};

export default function useFetch(url: string) {
  const [data, setData] = useState<TData>({
    loading: true,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          return setData((prevState) => {
            return { ...prevState, error: true, loading: false };
          });
        }

        const data = await response.json();

        setData((prevState) => {
          return { ...prevState, data, loading: false };
        });
      } catch (error) {
        console.error(error);
        setData((prevState) => {
          return { ...prevState, error: true, loading: false };
        });
      }
    };

    fetchData();
  }, [url]);

  return data;
}
