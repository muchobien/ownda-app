import type { PFC } from '@app/types';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme } from '@app/theme';

type Props = {
  onReady: () => void;
};

export const Navigation: PFC<Props> = ({ onReady }) => (
  <NavigationContainer onReady={onReady} theme={navigationTheme}>
    <RootNavigator />
  </NavigationContainer>
);
