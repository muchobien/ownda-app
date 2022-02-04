import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme, buildTheme } from '@app/theme';
import { forwardRef, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useMMKVBoolean } from 'react-native-mmkv';
import { storage } from '@app/utils/storage';
import { StatusBar } from '@app/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void }
>(({ onReady }, ref) => {
  const [logged] = useMMKVBoolean('@logged', storage);
  const insets = useSafeAreaInsets();

  const theme = useMemo(() => buildTheme(insets), [insets]);

  return (
    <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <RootNavigator authenticated={logged} />
      </ThemeProvider>
    </NavigationContainer>
  );
});
