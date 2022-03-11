/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type Account = {
  __typename: 'Account';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  transactions: TransactionConnection;
  updatedAt: Scalars['DateTime'];
};

export type AccountTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type AccountConnection = {
  __typename: 'AccountConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
};

export type AccountEdge = {
  __typename: 'AccountEdge';
  cursor: Scalars['String'];
  node: Account;
};

export type AccountInput = {
  color: Scalars['String'];
  name: Scalars['String'];
};

export type AuthInput = {
  email: Scalars['String'];
  hash: Scalars['String'];
  provider: Provider;
};

export type Authenticated = {
  __typename: 'Authenticated';
  credential: Credential;
  user: User;
};

export type Category = {
  __typename: 'Category';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryConnection = {
  __typename: 'CategoryConnection';
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
};

export type CategoryEdge = {
  __typename: 'CategoryEdge';
  cursor: Scalars['String'];
  node: Category;
};

export type CategoryInput = {
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};

export type Credential = {
  __typename: 'Credential';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  tokenKind: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  createAccount: Account;
  createCategory: Category;
  createTransaction: Transaction;
  login: Authenticated;
  /** Exchange a public_token from [Plaid Link](https://plaid.com/docs/api/#creating-items-with-plaid-link) for a Plaid access_token */
  plaidLink: Scalars['Boolean'];
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

export type MutationPlaidLinkArgs = {
  publicToken: Scalars['String'];
};

export type MutationRegisterArgs = {
  input: AuthInput;
};

export type PageInfo = {
  __typename: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export const enum Provider {
  Apple = 'APPLE',
  Google = 'GOOGLE',
  Local = 'LOCAL',
  Plaid = 'PLAID',
}

export type Query = {
  __typename: 'Query';
  account: Account;
  accounts: AccountConnection;
  categories: CategoryConnection;
  category: Category;
  linkToken: Scalars['String'];
  me: User;
  transaction: Transaction;
  transactions: TransactionConnection;
};

export type QueryAccountArgs = {
  id: Scalars['ID'];
};

export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type QueryCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryLinkTokenArgs = {
  packageName?: InputMaybe<Scalars['String']>;
};

export type QueryTransactionArgs = {
  id: Scalars['ID'];
};

export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type Transaction = {
  __typename: 'Transaction';
  amount: Scalars['Float'];
  category: Category;
  categoryId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  kind: TransactionKind;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionConnection = {
  __typename: 'TransactionConnection';
  edges: Array<TransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
};

export type TransactionEdge = {
  __typename: 'TransactionEdge';
  cursor: Scalars['String'];
  node: Transaction;
};

export type TransactionInput = {
  accountId: Scalars['String'];
  amount: Scalars['Float'];
  categoryId: Scalars['String'];
  kind: TransactionKind;
  name: Scalars['String'];
};

export const enum TransactionKind {
  Expense = 'EXPENSE',
  Income = 'INCOME',
  Transfer = 'TRANSFER',
}

export type User = {
  __typename: 'User';
  accounts: AccountConnection;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserAccountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type AccountFragment = {
  __typename: 'Account';
  id: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type PageFragment = {
  __typename: 'PageInfo';
  startCursor?: string | undefined | null;
  endCursor?: string | undefined | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type TransactionFragment = {
  __typename: 'Transaction';
  id: string;
  kind: TransactionKind;
  name: string;
  amount: number;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
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
  tokenKind: string;
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
  credential: {
    __typename: 'Credential';
    tokenKind: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type PlaidLinkMutationVariables = Exact<{
  publicToken: Scalars['String'];
}>;

export type PlaidLinkMutation = { __typename: 'Mutation'; plaidLink: boolean };

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
    credential: {
      __typename: 'Credential';
      tokenKind: string;
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
    credential: {
      __typename: 'Credential';
      tokenKind: string;
      accessToken: string;
      refreshToken: string;
    };
  };
};

export type AccountsQueryVariables = Exact<{ [key: string]: never }>;

export type AccountsQuery = {
  __typename: 'Query';
  accounts: {
    __typename: 'AccountConnection';
    edges: Array<{
      __typename: 'AccountEdge';
      cursor: string;
      node: {
        __typename: 'Account';
        id: string;
        name: string;
        color: string;
        createdAt: string;
        updatedAt: string;
        transactions: {
          __typename: 'TransactionConnection';
          edges: Array<{
            __typename: 'TransactionEdge';
            cursor: string;
            node: {
              __typename: 'Transaction';
              id: string;
              kind: TransactionKind;
              name: string;
              amount: number;
              categoryId: string;
              createdAt: string;
              updatedAt: string;
            };
          }>;
        };
      };
    }>;
  };
};

export type LinkTokenQueryVariables = Exact<{
  packageName?: InputMaybe<Scalars['String']>;
}>;

export type LinkTokenQuery = { __typename: 'Query'; linkToken: string };

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

export const AccountFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Account' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'color' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountFragment, unknown>;
export const PageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>;
export const TransactionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Transaction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TransactionFragment, unknown>;
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
          { kind: 'Field', name: { kind: 'Name', value: 'tokenKind' } },
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
            name: { kind: 'Name', value: 'credential' },
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
export const PlaidLinkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PlaidLink' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publicToken' },
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
            name: { kind: 'Name', value: 'plaidLink' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publicToken' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlaidLinkMutation, PlaidLinkMutationVariables>;
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
export const AccountsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Accounts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Account' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'transactions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'edges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'cursor',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'FragmentSpread',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'Transaction',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...AccountFragmentDoc.definitions,
    ...TransactionFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AccountsQuery, AccountsQueryVariables>;
export const LinkTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LinkToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'packageName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linkToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'packageName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'packageName' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LinkTokenQuery, LinkTokenQueryVariables>;
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
