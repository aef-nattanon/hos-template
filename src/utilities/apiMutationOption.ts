import { AxiosError, AxiosResponse } from 'axios';
import { UseMutationOptions } from 'react-query';

export default function apiMutationOption(
  option: object | any = {},
): UseMutationOptions<any, any, any, any> {
  return {
    onSuccess: (response: AxiosResponse) => {
      console.log("--error--", response);
    },
    onError: (error: AxiosError) => {
      console.log("--error--", error);
    },
    ...option,
  };
}
