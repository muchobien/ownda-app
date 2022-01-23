import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme } from '@app/theme';
import { forwardRef } from 'react';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void; authenticated: boolean }
>(({ onReady, authenticated }, ref) => (
  <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
    <RootNavigator authenticated={authenticated} />
  </NavigationContainer>
));
