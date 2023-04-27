import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Tour } from '~/interfaces';

export const useTourList = () => {
  const { data, error, isLoading, mutate } = useSWR<Tour[], AxiosError>(
    Endpoints.TOUR,
    HTTPService.get
  );

  return {
    tourList: data,
    isLoading,
    error,
    mutate
  };
};
