import type { PFC } from '@app/types';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root';
import { navigationTheme } from '@app/theme';

type Props = {
  onReady: () => void;
  authenticated: boolean;
};

export const Navigation: PFC<Props> = ({ onReady, authenticated }) => (
  <NavigationContainer onReady={onReady} theme={navigationTheme}>
    <RootNavigator authenticated={authenticated} />
  </NavigationContainer>
);
