import { useMutation } from '@apollo/client';
import { PlaidLinkDocument } from '@app/generated/graphql';
import { useCallback } from 'react';
import type { LinkSuccess } from 'react-native-plaid-link-sdk';

export const usePlaidLink = () => {
  const [mutate] = useMutation(PlaidLinkDocument);

  const registerLinkToken = useCallback(
    async ({ publicToken }: LinkSuccess) => {
      await mutate({ variables: { publicToken } });
    },
    [mutate],
  );

  return { registerLinkToken };
};
