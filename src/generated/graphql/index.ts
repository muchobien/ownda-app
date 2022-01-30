/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  StorageAdapter as GraphCacheStorageAdapter,
} from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Implement the DateTime<FixedOffset> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: string;
  Decimal: string;
  /**
   * A UUID is a unique 128-bit number, stored as 16 octets. UUIDs are parsed as Strings
   * within GraphQL. UUIDs are used to assign unique identifiers to entities without requiring a central
   * allocating authority.
   *
   * # References
   *
   * * [Wikipedia: Universally Unique Identifier](http://en.wikipedia.org/wiki/Universally_unique_identifier)
   * * [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](http://tools.ietf.org/html/rfc4122)
   */
  UUID: string;
};

export type Account = {
  __typename: 'Account';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  order: Scalars['Int'];
  transactions: Array<Transaction>;
  updatedAt: Scalars['DateTime'];
};

export type AccountInput = {
  color: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type AuthInput = {
  email: Scalars['String'];
  hash: Scalars['String'];
  provider: ProviderEnum;
};

export type Authenticated = {
  __typename: 'Authenticated';
  credentials: Credential;
  user: User;
};

export type Category = {
  __typename: 'Category';
  children: Array<Category>;
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  order: Scalars['Int'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['UUID']>;
  updatedAt: Scalars['DateTime'];
};

export type CategoryInput = {
  color: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
  parentId?: InputMaybe<Scalars['UUID']>;
};

export type Credential = {
  __typename: 'Credential';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  tokenType: Scalars['String'];
};

export type DateFilter = {
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type Mutation = {
  __typename: 'Mutation';
  createAccount: Scalars['Boolean'];
  createCategory: Scalars['Boolean'];
  createTransaction: Scalars['Boolean'];
  login: Authenticated;
  refreshToken: Credential;
  register: Authenticated;
};

export type MutationCreateAccountArgs = {
  input: AccountInput;
};

export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};

export type MutationCreateTransactionArgs = {
  input: TransactionInput;
};

export type MutationLoginArgs = {
  input: AuthInput;
};

export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};

export type MutationRegisterArgs = {
  input: AuthInput;
};

export const enum ProviderEnum {
  Apple = 'APPLE',
  Google = 'GOOGLE',
  Local = 'LOCAL',
}

export type Query = {
  __typename: 'Query';
  account: Account;
  accounts: Array<Account>;
  categories: Array<Category>;
  category: Category;
  me: User;
  transaction: Transaction;
  transactions: Array<Transaction>;
};

export type QueryAccountArgs = {
  id: Scalars['UUID'];
};

export type QueryCategoryArgs = {
  id: Scalars['UUID'];
};

export type QueryTransactionArgs = {
  id: Scalars['UUID'];
};

export type QueryTransactionsArgs = {
  filter: TransactionFilter;
};

export type Transaction = {
  __typename: 'Transaction';
  amount: Scalars['Decimal'];
  category: Category;
  categoryId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  type: TransactionTypeEnum;
  updatedAt: Scalars['DateTime'];
};

export type TransactionFilter = {
  accountId: Scalars['UUID'];
  date?: InputMaybe<DateFilter>;
};

export type TransactionInput = {
  accountId: Scalars['UUID'];
  amount: Scalars['Decimal'];
  categoryId: Scalars['UUID'];
  name: Scalars['String'];
  type: TransactionTypeEnum;
};

export const enum TransactionTypeEnum {
  Expense = 'EXPENSE',
  Income = 'INCOME',
  Transfer = 'TRANSFER',
}

export type User = {
  __typename: 'User';
  accounts: Array<Account>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};

export type AuthenticatedUserFragment = {
  __typename: 'User';
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type TokensFragment = {
  __typename: 'Credential';
  tokenType: string;
  accessToken: string;
  refreshToken: string;
};

export type AuthFragment = {
  __typename: 'Authenticated';
  user: {
    __typename: 'User';
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  credentials: {
    __typename: 'Credential';
    tokenType: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;

export type LoginMutation = {
  __typename: 'Mutation';
  login: {
    __typename: 'Authenticated';
    user: {
      __typename: 'User';
      id: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    credentials: {
      __typename: 'Credential';
      tokenType: string;
      accessToken: string;
      refreshToken: string;
    };
  };
};

export type RegisterMutationVariables = Exact<{
  input: AuthInput;
}>;

export type RegisterMutation = {
  __typename: 'Mutation';
  register: {
    __typename: 'Authenticated';
    user: {
      __typename: 'User';
      id: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    credentials: {
      __typename: 'Credential';
      tokenType: string;
      accessToken: string;
      refreshToken: string;
    };
  };
};

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type RefreshTokenMutation = {
  __typename: 'Mutation';
  refreshToken: {
    __typename: 'Credential';
    tokenType: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename: 'Query';
  me: {
    __typename: 'User';
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
};

export const AuthenticatedUserFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthenticatedUser' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthenticatedUserFragment, unknown>;
export const TokensFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Tokens' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Credential' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'tokenType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TokensFragment, unknown>;
export const AuthFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Auth' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Authenticated' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AuthenticatedUser' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'credentials' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Tokens' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AuthenticatedUserFragmentDoc.definitions,
    ...TokensFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AuthFragment, unknown>;
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AuthInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Auth' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AuthFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Register' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AuthInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Auth' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AuthFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const RefreshTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RefreshToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'refreshToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Tokens' },
                },
              ],
            },
          },
        ],
      },
    },
    ...TokensFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;
export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AuthenticatedUser' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AuthenticatedUserFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export type WithTypename<T extends { __typename?: any }> = {
  [K in Exclude<keyof T, '__typename'>]?: T[K];
} & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Account?: (data: WithTypename<Account>) => null | string;
  Authenticated?: (data: WithTypename<Authenticated>) => null | string;
  Category?: (data: WithTypename<Category>) => null | string;
  Credential?: (data: WithTypename<Credential>) => null | string;
  Transaction?: (data: WithTypename<Transaction>) => null | string;
  User?: (data: WithTypename<User>) => null | string;
};

export type GraphCacheResolvers = {
  Query?: {
    account?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountArgs,
      WithTypename<Account> | string
    >;
    accounts?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Array<WithTypename<Account> | string>
    >;
    category?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCategoryArgs,
      WithTypename<Category> | string
    >;
    categories?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Array<WithTypename<Category> | string>
    >;
    transaction?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTransactionArgs,
      WithTypename<Transaction> | string
    >;
    transactions?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTransactionsArgs,
      Array<WithTypename<Transaction> | string>
    >;
    me?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      WithTypename<User> | string
    >;
  };
  Account?: {
    id?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['UUID'] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    color?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    order?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['Int'] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    transactions?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Array<WithTypename<Transaction> | string>
    >;
  };
  Authenticated?: {
    user?: GraphCacheResolver<
      WithTypename<Authenticated>,
      Record<string, never>,
      WithTypename<User> | string
    >;
    credentials?: GraphCacheResolver<
      WithTypename<Authenticated>,
      Record<string, never>,
      WithTypename<Credential> | string
    >;
  };
  Category?: {
    id?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['UUID'] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    parentId?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['UUID'] | string
    >;
    color?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    order?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['Int'] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    parent?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      WithTypename<Category> | string
    >;
    children?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Array<WithTypename<Category> | string>
    >;
  };
  Credential?: {
    refreshToken?: GraphCacheResolver<
      WithTypename<Credential>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    accessToken?: GraphCacheResolver<
      WithTypename<Credential>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    tokenType?: GraphCacheResolver<
      WithTypename<Credential>,
      Record<string, never>,
      Scalars['String'] | string
    >;
  };
  Transaction?: {
    id?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      Scalars['UUID'] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    amount?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      Scalars['Decimal'] | string
    >;
    categoryId?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      Scalars['UUID'] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      TransactionTypeEnum | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    category?: GraphCacheResolver<
      WithTypename<Transaction>,
      Record<string, never>,
      WithTypename<Category> | string
    >;
  };
  User?: {
    id?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars['UUID'] | string
    >;
    email?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars['String'] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars['DateTime'] | string
    >;
    accounts?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Array<WithTypename<Account> | string>
    >;
  };
};

export type GraphCacheOptimisticUpdaters = {
  createAccount?: GraphCacheOptimisticMutationResolver<
    MutationCreateAccountArgs,
    Scalars['Boolean']
  >;
  createCategory?: GraphCacheOptimisticMutationResolver<
    MutationCreateCategoryArgs,
    Scalars['Boolean']
  >;
  createTransaction?: GraphCacheOptimisticMutationResolver<
    MutationCreateTransactionArgs,
    Scalars['Boolean']
  >;
  register?: GraphCacheOptimisticMutationResolver<
    MutationRegisterArgs,
    WithTypename<Authenticated>
  >;
  login?: GraphCacheOptimisticMutationResolver<
    MutationLoginArgs,
    WithTypename<Authenticated>
  >;
  refreshToken?: GraphCacheOptimisticMutationResolver<
    MutationRefreshTokenArgs,
    WithTypename<Credential>
  >;
};

export type GraphCacheUpdaters = {
  Mutation?: {
    createAccount?: GraphCacheUpdateResolver<
      { createAccount: Scalars['Boolean'] },
      MutationCreateAccountArgs
    >;
    createCategory?: GraphCacheUpdateResolver<
      { createCategory: Scalars['Boolean'] },
      MutationCreateCategoryArgs
    >;
    createTransaction?: GraphCacheUpdateResolver<
      { createTransaction: Scalars['Boolean'] },
      MutationCreateTransactionArgs
    >;
    register?: GraphCacheUpdateResolver<
      { register: WithTypename<Authenticated> },
      MutationRegisterArgs
    >;
    login?: GraphCacheUpdateResolver<
      { login: WithTypename<Authenticated> },
      MutationLoginArgs
    >;
    refreshToken?: GraphCacheUpdateResolver<
      { refreshToken: WithTypename<Credential> },
      MutationRefreshTokenArgs
    >;
  };
  Subscription?: {};
};

export type GraphCacheConfig = {
  schema?: IntrospectionData;
  updates?: GraphCacheUpdaters;
  keys?: GraphCacheKeysConfig;
  optimistic?: GraphCacheOptimisticUpdaters;
  resolvers?: GraphCacheResolvers;
  storage?: GraphCacheStorageAdapter;
};
