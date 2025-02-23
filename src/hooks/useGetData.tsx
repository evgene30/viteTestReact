import { useLayoutEffect, useState } from 'react';
import axios from 'axios';

export type TData = { label: string; value: string; key: string };

export const useGetData = (url: string): TData[] | undefined => {
  const [data, setData] = useState<TData[] | undefined>();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<
          { title: string; category: string; id: string }[]
        >(url);
        if (res?.data) {
          setData(
            res.data.map((item) => ({
              label: item.title,
              value: item.title,
              key: item.id,
            })),
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    void fetchData();
  }, [url]);

  return data;
};
