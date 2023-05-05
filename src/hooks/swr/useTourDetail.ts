import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Tour } from '~/interfaces';

export const useTourDetail = (id: string | undefined | null) => {
  const { data, error, isLoading, mutate } = useSWR<Tour, AxiosError>(
    id ? `${Endpoints.TOUR}/${id}` : null,
    HTTPService.get
  );

  return {
    tourDetail: data,
    isLoading,
    error,
    mutate
  };
};
