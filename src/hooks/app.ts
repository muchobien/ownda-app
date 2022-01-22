import { useCallback, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { client } from '@app/graphql';
import { MeDocument } from '@app/generated/graphql';

export const useApp = () => {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleReady = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  const setUp = useCallback(async () => {
    try {
      const { data } = await client.query(MeDocument).toPromise();
      setAuthenticated(!!data?.me);
    } catch {
      // noop
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    setUp();
  }, [setUp]);

  return {
    ready,
    authenticated,
    handleReady,
    client,
  };
};
