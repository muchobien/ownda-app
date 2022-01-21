import { type MeQuery, MeDocument } from '@app/generated/graphql';
import { useQuery } from 'urql';

export const useMe = () => {
  const [{ data, fetching }] = useQuery({ query: MeDocument });

  if (!fetching) {
    return {
      fetching,
      me: (data as MeQuery).me,
    };
  }

  return {
    fetching,
    me: undefined,
  };
};
