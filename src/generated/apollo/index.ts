/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type AccountKeySpecifier = (
  | 'color'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'transactions'
  | 'updatedAt'
  | AccountKeySpecifier
)[];
export type AccountFieldPolicy = {
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AccountConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | AccountConnectionKeySpecifier
)[];
export type AccountConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AccountEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | AccountEdgeKeySpecifier
)[];
export type AccountEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AuthenticatedKeySpecifier = (
  | 'credential'
  | 'user'
  | AuthenticatedKeySpecifier
)[];
export type AuthenticatedFieldPolicy = {
  credential?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'
  | CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | CategoryConnectionKeySpecifier
)[];
export type CategoryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | CategoryEdgeKeySpecifier
)[];
export type CategoryEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CredentialKeySpecifier = (
  | 'accessToken'
  | 'refreshToken'
  | 'tokenKind'
  | CredentialKeySpecifier
)[];
export type CredentialFieldPolicy = {
  accessToken?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  tokenKind?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createAccount'
  | 'createCategory'
  | 'createTransaction'
  | 'login'
  | 'plaidLink'
  | 'refreshToken'
  | 'register'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  createCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  createTransaction?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  plaidLink?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  register?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageInfoKeySpecifier = (
  | 'endCursor'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | PageInfoKeySpecifier
)[];
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'account'
  | 'accounts'
  | 'categories'
  | 'category'
  | 'linkToken'
  | 'me'
  | 'transaction'
  | 'transactions'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  account?: FieldPolicy<any> | FieldReadFunction<any>;
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  categories?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  linkToken?: FieldPolicy<any> | FieldReadFunction<any>;
  me?: FieldPolicy<any> | FieldReadFunction<any>;
  transaction?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TransactionKeySpecifier = (
  | 'amount'
  | 'category'
  | 'categoryId'
  | 'createdAt'
  | 'id'
  | 'kind'
  | 'name'
  | 'updatedAt'
  | TransactionKeySpecifier
)[];
export type TransactionFieldPolicy = {
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  categoryId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  kind?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TransactionConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | TransactionConnectionKeySpecifier
)[];
export type TransactionConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TransactionEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | TransactionEdgeKeySpecifier
)[];
export type TransactionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'accounts'
  | 'createdAt'
  | 'email'
  | 'id'
  | 'updatedAt'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Account?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AccountKeySpecifier
      | (() => undefined | AccountKeySpecifier);
    fields?: AccountFieldPolicy;
  };
  AccountConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AccountConnectionKeySpecifier
      | (() => undefined | AccountConnectionKeySpecifier);
    fields?: AccountConnectionFieldPolicy;
  };
  AccountEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AccountEdgeKeySpecifier
      | (() => undefined | AccountEdgeKeySpecifier);
    fields?: AccountEdgeFieldPolicy;
  };
  Authenticated?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AuthenticatedKeySpecifier
      | (() => undefined | AuthenticatedKeySpecifier);
    fields?: AuthenticatedFieldPolicy;
  };
  Category?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CategoryKeySpecifier
      | (() => undefined | CategoryKeySpecifier);
    fields?: CategoryFieldPolicy;
  };
  CategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CategoryConnectionKeySpecifier
      | (() => undefined | CategoryConnectionKeySpecifier);
    fields?: CategoryConnectionFieldPolicy;
  };
  CategoryEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CategoryEdgeKeySpecifier
      | (() => undefined | CategoryEdgeKeySpecifier);
    fields?: CategoryEdgeFieldPolicy;
  };
  Credential?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CredentialKeySpecifier
      | (() => undefined | CredentialKeySpecifier);
    fields?: CredentialFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier);
    fields?: PageInfoFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Transaction?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TransactionKeySpecifier
      | (() => undefined | TransactionKeySpecifier);
    fields?: TransactionFieldPolicy;
  };
  TransactionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TransactionConnectionKeySpecifier
      | (() => undefined | TransactionConnectionKeySpecifier);
    fields?: TransactionConnectionFieldPolicy;
  };
  TransactionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TransactionEdgeKeySpecifier
      | (() => undefined | TransactionEdgeKeySpecifier);
    fields?: TransactionEdgeFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
