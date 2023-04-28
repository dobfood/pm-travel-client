import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Tour } from '~/interfaces';

export const useCategory = () => {
  const { data, error, isLoading, mutate } = useSWR<Tour[], AxiosError>(
    Endpoints.CATEGORY,
    HTTPService.get
  );

  return {
    category: data,
    isLoading,
    error,
    mutate
  };
};
