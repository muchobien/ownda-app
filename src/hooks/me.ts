import type { AuthInput } from '@app/generated/graphql';
import {
  RegisterDocument,
  MeDocument,
  LoginDocument,
} from '@app/generated/graphql';
import { storage } from '@app/utils/storage';
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
        storage.set('@logged', true);
        storage.setObject('@auth', data.login.credential);
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
    storage.delete('@auth');
    storage.delete('@logged');
  }, []);

  return { logout };
};
