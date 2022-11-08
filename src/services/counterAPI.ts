import { AxiosResponse } from 'axios';

import axiosApiInstance from '../utilities/axios-helper';

export async function fetchCount(amount = 1): Promise<AxiosResponse<any, any>> {
  const callUrl = "/api/counter";
  return axiosApiInstance.post(callUrl, { amount });
}
export async function fetchCount2(
  amount = 1,
): Promise<AxiosResponse<any, any>> {
  const callUrl = "/api/counter2";
  return axiosApiInstance.post(callUrl, { amount });
}
