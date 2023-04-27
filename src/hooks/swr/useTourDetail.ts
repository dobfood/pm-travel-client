import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Tour } from '~/interfaces';

export const useTourDetail = (id: string | undefined) => {
  const { data, error, isLoading, mutate } = useSWR<Tour[], AxiosError>(
    id ? `${Endpoints.TOUR}/${id}` : null,
    HTTPService.get
  );

  return {
    tour: data,
    isLoading,
    error,
    mutate
  };
};
