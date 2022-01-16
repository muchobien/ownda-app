/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
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
  credentials: Credential;
  user: User;
};

export type Category = {
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
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  tokenType: Scalars['String'];
};

export type DateFilter = {
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type Mutation = {
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
  accounts: Array<Account>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};
