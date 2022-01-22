import type { AuthInput } from '@app/generated/graphql';
import {
  RegisterDocument,
  type MeQuery,
  MeDocument,
  LoginDocument,
} from '@app/generated/graphql';
import { useCallback } from 'react';
import { useMutation, useQuery } from 'urql';

export const useMe = () => {
  const [{ data, fetching }] = useQuery({ query: MeDocument });

  if (!fetching) {
    return {
      fetching,
      me: (data as MeQuery).me,
    };
  }

  return {
    fetching,
    me: undefined,
  };
};

export const useLogin = () => {
  const [{ fetching }, mutate] = useMutation(LoginDocument);

  const login = useCallback((input: AuthInput) => mutate({ input }), [mutate]);

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
