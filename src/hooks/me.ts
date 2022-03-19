import type { AuthInput } from '@app/generated/graphql';
import {
  RegisterDocument,
  MeDocument,
  LoginDocument,
} from '@app/generated/graphql';
import { store } from '@app/utils/store';
import { useCallback } from 'react';
import { useMutation, useQuery } from '@apollo/client';

export const useMe = () => {
  const { data, loading } = useQuery(MeDocument);

  return {
    me: data?.me,
    loading,
  };
};

export const useLogin = () => {
  const [mutate, { loading }] = useMutation(LoginDocument);

  const login = useCallback(
    async (input: AuthInput) => {
      const { data, errors } = await mutate({ variables: { input } });
      if (errors) return { errors };
      if (data) {
        store.set('@logged', true);
        store.setObject('@auth', data.login.credential);
      }
      return {};
    },
    [mutate],
  );

  return { login, loading };
};

export const useRegister = () => {
  const [mutate, { loading }] = useMutation(RegisterDocument);

  const register = useCallback(
    (input: AuthInput) => mutate({ variables: { input } }),
    [mutate],
  );

  return { register, loading };
};

export const useLogout = () => {
  const logout = useCallback(() => {
    store.delete('@auth');
    store.delete('@logged');
  }, []);

  return { logout };
};
