import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

import { fetchCount } from '../services/counterAPI';
import { incrementByAmount } from '../slices/counterSlice';
import apiMutationOption from '../utilities/apiMutationOption';
import { useAppDispatch } from './hooks';

export function useCounter() {
  const dispatch = useAppDispatch();
  return useMutation(
    "countAsync",
    (n: number) => fetchCount(n),
    apiMutationOption({
      onSuccess: (response: AxiosResponse) => {
        if (response.data) {
          const { data } = response;
          dispatch(incrementByAmount(Number(data.data)));
        }
      },
    }),
  );
}
