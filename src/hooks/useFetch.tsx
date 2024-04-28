import { useEffect, useState } from 'react';

type TData = {
  loading: boolean;
  error?: string | null;
  data?: {};
};

export default function useFetch(url: string) {
  const [data, setData] = useState<TData>({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `An error has occured - ${response.status} : ${response.statusText}`
          );
        }

        const data = await response.json();

        setData((prevState) => {
          return { ...prevState, data, loading: false, error: null };
        });
      } catch (error: any) {
        console.error(error);
        setData((prevState) => {
          return { ...prevState, error: error.message, loading: false };
        });
      }
    };

    fetchData();
  }, [url]);

  return data;
}
