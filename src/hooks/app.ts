import { useCallback, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { client } from '@app/graphql';
import { MeDocument } from '@app/generated/graphql';
import { useNavigationContainerRef } from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';
import { storage } from '@app/utils/storage';
import { useMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import * as Font from 'expo-font';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export const useApp = () => {
  const [ready, setReady] = useState(false);
  const navigationRef = useNavigationContainerRef();

  const handleReady = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  const setUp = useCallback(async () => {
    try {
      await Font.loadAsync({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
      });
      await client.query(MeDocument).toPromise();
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
    client,
    handleReady,
    navigationRef,
    ready,
  };
};
