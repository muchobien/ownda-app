import { AccountsDocument } from '@app/generated/graphql';
import { useQuery } from '@apollo/client';

export const useAccounts = () => {
  const { data, loading, error } = useQuery(AccountsDocument);

  return {
    data,
    loading,
    error,
  };
};
