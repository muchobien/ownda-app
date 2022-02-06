import { AccountsDocument } from '@app/generated/graphql';
import { useQuery } from 'urql';

export const useAccounts = () => {
  const [{ data, fetching, error }] = useQuery({
    query: AccountsDocument,
    requestPolicy: 'cache-and-network',
  });

  return {
    data,
    fetching,
    error,
  };
};
