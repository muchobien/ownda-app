import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { enableFreeze, enableScreens } from 'react-native-screens';
import { App } from './src';
import { name as appName } from './app.json';

enableFreeze(true);
enableScreens(true);

AppRegistry.registerComponent(appName, () => App);
