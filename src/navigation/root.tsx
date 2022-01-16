import React from 'react';
import type { RootStackParamList } from '@app/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './bottom';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Root">
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
