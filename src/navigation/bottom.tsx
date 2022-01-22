import { Home } from '@app/screens';
import type { RootTabParamList } from '@app/types';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={defaultScreenOptions}
  >
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Settings" component={Home} />
  </BottomTab.Navigator>
);
