import type { Theme as NavigationTheme } from '@react-navigation/native';
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

export type AppTheme = typeof theme;
