import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { debounce } from 'lodash';
import axios from 'axios';

type TData = {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};
const myData: TData = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
};

export const useQueryData = () => {
  const mutation = useMutation((sendData: TData) =>
    axios.post('https://fakestoreapi.com/products', sendData),
  );

  const debouncedMutation = debounce((data: TData) => {
    void mutation.mutate(data);
  }, 300);

  useEffect(() => {
    if (myData) {
      debouncedMutation(myData);
    }

    return () => debouncedMutation.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myData]);

  return mutation;
};
