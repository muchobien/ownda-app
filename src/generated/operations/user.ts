/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import type * as Types from '../schema/index';

import { gql } from 'urql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AuthenticatedUserFragment = Pick<
  Types.User,
  'id' | 'email' | 'createdAt' | 'updatedAt'
>;

export type TokensFragment = Pick<
  Types.Credential,
  'tokenType' | 'accessToken' | 'refreshToken'
>;

export type AuthFragment = {
  user: Pick<Types.User, 'id' | 'email' | 'createdAt' | 'updatedAt'>;
  credentials: Pick<
    Types.Credential,
    'tokenType' | 'accessToken' | 'refreshToken'
  >;
};

export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
  me: Pick<Types.User, 'id' | 'email' | 'createdAt' | 'updatedAt'>;
};

export type LoginMutationVariables = Types.Exact<{
  input: Types.AuthInput;
}>;

export type LoginMutation = {
  login: {
    user: Pick<Types.User, 'id' | 'email' | 'createdAt' | 'updatedAt'>;
    credentials: Pick<
      Types.Credential,
      'tokenType' | 'accessToken' | 'refreshToken'
    >;
  };
};

export type RegisterMutationVariables = Types.Exact<{
  input: Types.AuthInput;
}>;

export type RegisterMutation = {
  register: {
    user: Pick<Types.User, 'id' | 'email' | 'createdAt' | 'updatedAt'>;
    credentials: Pick<
      Types.Credential,
      'tokenType' | 'accessToken' | 'refreshToken'
    >;
  };
};

export type RefreshTokenMutationVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;

export type RefreshTokenMutation = {
  refreshToken: Pick<
    Types.Credential,
    'tokenType' | 'accessToken' | 'refreshToken'
  >;
};

export const AuthenticatedUserFragmentDoc = gql`
  fragment AuthenticatedUser on User {
    id
    email
    createdAt
    updatedAt
  }
`;
export const TokensFragmentDoc = gql`
  fragment Tokens on Credential {
    tokenType
    accessToken
    refreshToken
  }
`;
export const AuthFragmentDoc = gql`
  fragment Auth on Authenticated {
    user {
      ...AuthenticatedUser
    }
    credentials {
      ...Tokens
    }
  }
  ${AuthenticatedUserFragmentDoc}
  ${TokensFragmentDoc}
`;
export const MeDocument = gql`
  query Me {
    me {
      ...AuthenticatedUser
    }
  }
  ${AuthenticatedUserFragmentDoc}
`;

export function useMeQuery(
  options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
export const LoginDocument = gql`
  mutation Login($input: AuthInput!) {
    login(input: $input) {
      ...Auth
    }
  }
  ${AuthFragmentDoc}
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const RegisterDocument = gql`
  mutation Register($input: AuthInput!) {
    register(input: $input) {
      ...Auth
    }
  }
  ${AuthFragmentDoc}
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
  );
}
export const RefreshTokenDocument = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      ...Tokens
    }
  }
  ${TokensFragmentDoc}
`;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(
    RefreshTokenDocument,
  );
}
