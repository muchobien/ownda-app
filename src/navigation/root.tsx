import { DatabaseProvider } from '@app/db';
import { Auth, Onboarding } from '@app/screens';
import type { PFC, RootStackParamList } from '@app/types';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './bottom';

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

type Props = {
  authenticated: boolean;
};

export const RootNavigator: PFC<Props> = ({ authenticated }) => (
  <DatabaseProvider>
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={defaultScreenOptions}
    >
      {authenticated ? (
        <Stack.Group>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  </DatabaseProvider>
);
