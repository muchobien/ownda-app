import { theme } from '@app/theme';
import styled from '@emotion/native';
import { StatusBar as StatusBarBase } from 'react-native';

export const StatusBar = styled(StatusBarBase)``;

StatusBar.defaultProps = {
  translucent: true,
  backgroundColor: theme.colors.transparent,
  barStyle: 'light-content',
};
