import type { Theme as NavigationTheme } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { colors } from './colors';

export const navigationTheme: NavigationTheme = {
  dark: true,
  colors: {
    background: colors.black,
    primary: colors.ivy,
    border: colors.gray,
    card: colors.black,
    notification: colors.ivy,
    text: colors.white,
  },
};

export const theme = {
  colors,
};

export type AppTheme = typeof theme & {
  device: {
    insets: EdgeInsets;
    width: number;
    height: number;
  };
};

const { width, height } = Dimensions.get('window');

export const buildTheme = (insets: EdgeInsets): AppTheme => ({
  colors,
  device: {
    insets,
    width,
    height,
  },
});

export { width, height };
