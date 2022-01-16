import type { FCC } from '@app/types';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme } from '@app/theme';

type Props = {
  onReady: () => void;
};

export const Navigation: FCC<Props> = ({ onReady }) => (
  <NavigationContainer onReady={onReady} theme={navigationTheme}>
    <RootNavigator />
  </NavigationContainer>
);
