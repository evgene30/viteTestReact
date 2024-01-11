import { renderHook, act } from '@testing-library/react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useQueryData } from '../components/hooks/useQuery';

jest.mock('axios');
jest.mock('react-query', () => ({
  useMutation: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AxiosPostFunction = <T = string, R = AxiosResponse<T, any>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>,
) => Promise<R>;

describe('useQueryData', () => {
  test('should debounce the mutation', async () => {
    const mockPost = jest.fn();
    (
      axios.post as jest.MockedFunction<AxiosPostFunction>
    ).mockResolvedValueOnce({ data: {} });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useMutation as any).mockReturnValueOnce({ mutate: mockPost });

    const { result } = renderHook(() => useQueryData());

    const data = { id: 1, name: 'Product' };
    void act(() => {
      result.current.mutate(data as never);
    });

    expect(mockPost).toHaveBeenCalledTimes(1);
  });

  test('should cancel the debounced mutation on cleanup', async () => {
    const mockPost = jest.fn();
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: {} });

    const cancelMutation = jest.fn();
    (useMutation as jest.Mock).mockReturnValueOnce({
      mutate: mockPost,
      cancel: cancelMutation,
    });

    const { result, unmount } = renderHook(() => useQueryData());

    await act(async () => {
      result.current.mutate({ id: 1, name: 'Product' } as never);
    });

    unmount();

    expect(cancelMutation).not.toHaveBeenCalled();
  });
});
