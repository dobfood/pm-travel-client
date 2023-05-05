import { ReactNode, useEffect } from 'react';
import StorageUtils from '~/utils/storage';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = StorageUtils.get('access-token');

  const isTokenExprixe = token
    ? jwt_decode<any>(token).exp < new Date().getTime()
    : false;

  useEffect(() => {
    if (isTokenExprixe) {
      StorageUtils.clear();
    }
  }, []);

  if (!isTokenExprixe) return <Navigate to='/login' />;
  return children;
};
