import { AxiosRequestConfig } from 'axios';
import { useAxios } from 'use-axios-client';

type Options = Omit<AxiosRequestConfig, 'url'> & {
  path: string;
};

export const useFetch = (options: Options) => {
  return useAxios({
    url: `http://localhost:5000/${options.path}`,
    ...options
  });
};