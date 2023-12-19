import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { debounce, DebouncedFunc } from 'lodash';

type TData = { id: number; value: string };

const useQuery = () => {
  const myData: TData = { id: 1, value: '4' };
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newData) =>
      fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries('data');
      },
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const debouncedMutation: DebouncedFunc<(data: TData) => void> = debounce(
    (data: TData) => {
      void mutation.mutate(data as never);
    },
    300,
  );

  useEffect(() => {
    if (myData) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      debouncedMutation(myData);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return () => debouncedMutation.cancel();
  }, [myData]);
};
