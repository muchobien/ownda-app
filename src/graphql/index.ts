import {
  createClient,
  dedupExchange,
  fetchExchange,
  errorExchange,
  makeOperation,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { storage } from '@app/utils/storage';
import type { GraphCacheConfig } from '@app/generated/graphql';
import { RefreshTokenDocument } from '@app/generated/graphql';
import { offlineExchange } from '@urql/exchange-graphcache';
import { makeUrqlStorage } from '@app/utils/makeUrqlStorage';
import schema from '@app/generated/graphql/schema.json';
import { ENDPOINT } from '@env';

type AuthState = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

export const client = createClient({
  url: ENDPOINT,
  exchanges: [
    dedupExchange,
    offlineExchange<GraphCacheConfig>({
      // @ts-expect-error: TODO: fix this
      schema,
      storage: makeUrqlStorage(),
      updates: {
        Mutation: {
          login: (result, _args, cache, _info) => {
            if (result.login.user) {
              cache.link('Query', 'me', result.login.user);
            }
          },
        },
      },
    }),
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

        const { data } = await mutate(RefreshTokenDocument);

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
