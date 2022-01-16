import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  errorExchange,
  makeOperation,
} from 'urql';

import { authExchange } from '@urql/exchange-auth';
import { storage } from '@app/utils/storage';
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from '@app/generated/operations/user';

type AuthState = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

export const client = createClient({
  url: 'http://100.90.159.107:8000/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: error => {
        const isAuthError = error.graphQLErrors.some(
          e => e.extensions?.code === '401',
        );

        if (isAuthError) {
          // clear storage, log the user out etc
          storage.delete('@auth');
        }
      },
    }),
    authExchange<AuthState>({
      addAuthToOperation: ({ authState, operation }) => {
        if (!authState || !authState.accessToken) {
          return operation;
        }

        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};

        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `${authState.tokenType} ${authState.accessToken}`,
            },
          },
        });
      },

      willAuthError: ({ authState }) => {
        if (!authState) return true;
        return false;
      },

      didAuthError: ({ error }) => {
        return error.graphQLErrors.some(e => e.extensions?.code === '401');
      },

      getAuth: async ({ authState, mutate }) => {
        if (!authState) {
          return storage.getObject<AuthState>('@auth') ?? null;
        }

        const { data } = await mutate<
          RefreshTokenMutation,
          RefreshTokenMutationVariables
        >(RefreshTokenDocument);

        if (data?.refreshToken) {
          storage.setObject('@auth', data.refreshToken);
          return data.refreshToken;
        }

        storage.delete('@auth');

        return null;
      },
    }),
    fetchExchange,
  ],
});
