import type { AuthInput } from '@app/generated/graphql';
import {
  RegisterDocument,
  MeDocument,
  LoginDocument,
} from '@app/generated/graphql';
import { storage } from '@app/utils/storage';
import { useCallback } from 'react';
import { useMutation, useQuery } from 'urql';

export const useMe = () => {
  const [{ data, fetching }] = useQuery({ query: MeDocument });

  return {
    me: data?.me,
    fetching,
  };
};

export const useLogin = () => {
  const [{ fetching }, mutate] = useMutation(LoginDocument);

  const login = useCallback(
    async (input: AuthInput) => {
      const { data } = await mutate({ input });
      if (data) {
        storage.setObject('@auth', data.login.credentials);
      }
    },
    [mutate],
  );

  return { login, fetching };
};

export const useRegister = () => {
  const [{ fetching }, mutate] = useMutation(RegisterDocument);

  const register = useCallback(
    (input: AuthInput) => mutate({ input }),
    [mutate],
  );

  return { register, fetching };
};
