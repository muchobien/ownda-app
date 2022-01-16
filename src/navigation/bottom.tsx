import { Home } from '@app/screens';
import type { RootTabParamList } from '@app/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Settings" component={Home} />
  </BottomTab.Navigator>
);
