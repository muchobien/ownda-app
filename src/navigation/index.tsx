import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme, theme } from '@app/theme';
import { forwardRef } from 'react';
import { ThemeProvider } from '@emotion/react';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void; authenticated: boolean }
>(({ onReady, authenticated }, ref) => (
  <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
    <ThemeProvider theme={theme}>
      <RootNavigator authenticated={authenticated} />
    </ThemeProvider>
  </NavigationContainer>
));
