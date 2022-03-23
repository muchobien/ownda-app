import { store } from '@app/utils';
import { useCallback } from 'react';

export const useLogout = () => {
  const logout = useCallback(() => {
    store.delete('@logged');
  }, []);

  return { logout };
};
