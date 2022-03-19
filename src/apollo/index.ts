import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { store } from '@app/utils/store';
import { ENDPOINT } from '@env';
import { MMKVWrapper, persistCacheSync } from 'apollo3-cache-persist';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import type { Credential } from '@app/generated/graphql';
import type { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { setContext } from '@apollo/client/link/context';
import { typePolicies } from './policies';

const query = `#graphql
  mutation RefreshToken {
    refreshToken {
      tokenKind
      accessToken
      refreshToken
    }
  }
`;

const isTokenValidOrUndefined = () => {
  const credentials = store.getObject<Credential>('@auth');
  if (!credentials) return true;
  const { exp } = jwtDecode<JwtPayload>(credentials.accessToken);
  return exp! > Date.now() / 1000;
};

export const makeClient = () => {
  const httpLink = createHttpLink({
    uri: ENDPOINT,
  });

  const cache = new InMemoryCache({ typePolicies });
  const storage = new MMKVWrapper(store.asMMKV());
  persistCacheSync({ cache, storage });

  const refreshLink = new TokenRefreshLink<Credential>({
    accessTokenField: 'refreshToken',
    isTokenValidOrUndefined,
    fetchAccessToken: () => {
      const credentials = store.getObject<Credential>('@auth');
      return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'x-refresh-token': credentials!.refreshToken,
        },
        body: JSON.stringify({
          query,
        }),
      });
    },
    handleFetch: accessToken => {
      store.setObject('@auth', accessToken);
    },
    handleError: () => {
      store.delete('@auth');
      store.delete('@logged');
    },
  });

  const authLink = setContext((_, { headers }) => {
    const credentials = store.getObject<Credential>('@auth');
    if (!credentials) return { headers };
    return {
      headers: {
        ...headers,
        authorization: `${credentials.tokenKind} ${credentials.accessToken}`,
      },
    };
  });

  const client = new ApolloClient({
    cache,
    link: ApolloLink.from([refreshLink, authLink, httpLink]),
  });

  return client;
};
