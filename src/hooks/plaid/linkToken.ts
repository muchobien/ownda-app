import { useQuery } from '@apollo/client';
import * as Application from 'expo-application';
import { LinkTokenDocument } from '@app/generated/graphql';
import { Platform } from 'react-native';

const packageName =
  Platform.select({
    default: null,
    android: Application.applicationId,
  }) ?? undefined;

export const useLinkToken = () => {
  const { data, loading } = useQuery(LinkTokenDocument, {
    variables: {
      packageName,
    },
  });

  return { loading, linkToken: data?.linkToken };
};
