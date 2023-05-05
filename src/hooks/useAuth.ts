import { useContext } from 'react';
import { AuthContext, IAuthContext } from '~/context/AuthProvider';

export const useAuth = ():IAuthContext => useContext(AuthContext) as IAuthContext;
