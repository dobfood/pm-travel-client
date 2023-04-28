import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Tour } from '~/interfaces';

export const useProvince = () => {
  const { data, error, isLoading, mutate } = useSWR<Tour[], AxiosError>(
    Endpoints.PROVINCE,
    HTTPService.get
  );

  return {
    province: data,
    isLoading,
    error,
    mutate
  };
};
