import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme, theme } from '@app/theme';
import { forwardRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useMMKVBoolean } from 'react-native-mmkv';
import { storage } from '@app/utils/storage';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void }
>(({ onReady }, ref) => {
  const [logged] = useMMKVBoolean('@logged', storage);

  return (
    <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
      <ThemeProvider theme={theme}>
        <RootNavigator authenticated={logged} />
      </ThemeProvider>
    </NavigationContainer>
  );
});
