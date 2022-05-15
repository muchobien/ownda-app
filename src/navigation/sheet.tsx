import { TabBarHeightProvider } from '@app/providers';
import { Home } from '@app/screens';
import type { SheetParamList } from '@app/types';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Sheet = createNativeStackNavigator<SheetParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const SheetNavigator = () => (
  <TabBarHeightProvider>
    <Sheet.Navigator
      initialRouteName="Home"
      screenOptions={defaultScreenOptions}>
      <Sheet.Screen name="Home" component={Home} />
    </Sheet.Navigator>
  </TabBarHeightProvider>
);
