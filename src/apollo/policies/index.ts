import type { StrictTypedTypePolicies } from '@app/generated/apollo';
import { relayStylePagination } from '@apollo/client/utilities';

export const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      transactions: relayStylePagination(),
      accounts: relayStylePagination(),
      categories: relayStylePagination(),
    },
  },
  Account: {
    fields: {
      transactions: relayStylePagination(),
    },
  },
  User: {
    fields: {
      accounts: relayStylePagination(),
    },
  },
};
