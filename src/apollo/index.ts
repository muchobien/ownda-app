import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { storage as mmkv } from '@app/utils/storage';
import { ENDPOINT } from '@env';
import { MMKVWrapper, persistCacheSync } from 'apollo3-cache-persist';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import type { Credential } from '@app/generated/graphql';
import type { MMKV } from 'react-native-mmkv';
import type { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { setContext } from '@apollo/client/link/context';

const query = `#graphql
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      tokenType
      accessToken
      refreshToken
    }
  }
`;

const isTokenValidOrUndefined = () => {
  const credentials = mmkv.getObject<Credential>('@auth');
  if (!credentials) return true;
  const { exp } = jwtDecode<JwtPayload>(credentials.accessToken);
  return exp! > Date.now() / 1000;
};

export const makeClient = () => {
  const httpLink = createHttpLink({
    uri: ENDPOINT,
  });

  const cache = new InMemoryCache();
  const storage = new MMKVWrapper(mmkv as MMKV);
  persistCacheSync({ cache, storage });

  const refreshLink = new TokenRefreshLink<Credential>({
    accessTokenField: 'refreshToken',
    isTokenValidOrUndefined,
    fetchAccessToken: () => {
      const credentials = mmkv.getObject<Credential>('@auth');
      return fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
          query,
          variables: { token: credentials?.refreshToken },
        }),
      });
    },
    handleFetch: accessToken => {
      mmkv.setObject('@auth', accessToken);
    },
    handleError: () => {
      mmkv.delete('@auth');
      mmkv.delete('@logged');
    },
  });

  const authLink = setContext((_, { headers }) => {
    const credentials = mmkv.getObject<Credential>('@auth');
    if (!credentials) return { headers };
    return {
      headers: {
        ...headers,
        authorization: `${credentials.tokenType} ${credentials.accessToken}`,
      },
    };
  });

  const client = new ApolloClient({
    cache,
    link: ApolloLink.from([refreshLink, authLink, httpLink]),
  });

  return client;
};
