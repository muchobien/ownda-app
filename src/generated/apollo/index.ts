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
  | 'order'
  | 'transactions'
  | 'updatedAt'
  | AccountKeySpecifier
)[];
export type AccountFieldPolicy = {
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AuthenticatedKeySpecifier = (
  | 'credentials'
  | 'user'
  | AuthenticatedKeySpecifier
)[];
export type AuthenticatedFieldPolicy = {
  credentials?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
  | 'children'
  | 'color'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'order'
  | 'parent'
  | 'parentId'
  | 'updatedAt'
  | CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CredentialKeySpecifier = (
  | 'accessToken'
  | 'refreshToken'
  | 'tokenType'
  | CredentialKeySpecifier
)[];
export type CredentialFieldPolicy = {
  accessToken?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  tokenType?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createAccount'
  | 'createCategory'
  | 'createTransaction'
  | 'login'
  | 'refreshToken'
  | 'register'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  createCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  createTransaction?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  register?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'account'
  | 'accounts'
  | 'categories'
  | 'category'
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
  | 'name'
  | 'type'
  | 'updatedAt'
  | TransactionKeySpecifier
)[];
export type TransactionFieldPolicy = {
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  categoryId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
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
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
