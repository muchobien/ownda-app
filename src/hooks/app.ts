import { useCallback, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { client } from '@app/graphql';
import { MeDocument } from '@app/generated/graphql';
import { useNavigationContainerRef } from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';
import { storage } from '@app/utils/storage';
import { useMMKVFlipper } from 'react-native-mmkv-flipper-plugin';

export const useApp = () => {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigationRef = useNavigationContainerRef();

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

  useFlipper(navigationRef);
  useMMKVFlipper(storage);

  useEffect(() => {
    setUp();
  }, [setUp]);

  return {
    authenticated,
    client,
    handleReady,
    navigationRef,
    ready,
  };
};
