import { AxiosError } from 'axios';
import useSWR from 'swr';
import { Endpoints, HTTPService } from '~/fetcher';
import { Category } from '~/interfaces';

export const useCategoryDetail = (id: string | undefined | null) => {
  const { data, error, isLoading, mutate } = useSWR<Category[], AxiosError>(
    id ? `${Endpoints.CATEGORY}/${id}` : null,
    HTTPService.get
  );

  return {
    categoryDetail: data,
    isLoading,
    error,
    mutate
  };
};
