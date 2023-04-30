import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Tour } from '~/interfaces';

export const useTop5Tour = () => {
  const { data, error, isLoading, mutate } = useSWR<Tour[], AxiosError>(
    Endpoints.TOP5TOUR,
    HTTPService.get
  );

  return {
    topTour: data,
    isLoading,
    error,
    mutate
  };
};
