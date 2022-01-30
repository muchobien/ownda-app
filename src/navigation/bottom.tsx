import { Home, Settings } from '@app/screens';
import type { RootTabParamList } from '@app/types';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: { position: 'absolute' },
  tabBarBackground: () => (
    <BlurView tint="dark" intensity={22} style={StyleSheet.absoluteFill} />
  ),
};

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={defaultScreenOptions}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
};
