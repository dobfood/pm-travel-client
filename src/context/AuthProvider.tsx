import { useState, createContext } from 'react';
import StorageUtils from '~/utils/storage';

export interface IAuthContext {
  auth: any | null;
  setAuth: React.Dispatch<React.SetStateAction<any | null>>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<any | null>(StorageUtils.get('user'));

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
