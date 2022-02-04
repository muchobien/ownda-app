import { Text } from '@app/components';
import styled from '@emotion/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Presable = styled(BorderlessButton)(({ theme }) => ({
  paddingBottom: theme.device.insets.bottom || 16,
  marginTop: 16,
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

Presable.defaultProps = {
  activeOpacity: 1,
};

export const Label = styled(Text)<{ focused: boolean }>`
  color: ${({ focused, theme }) =>
    focused ? theme.colors.ivy : theme.colors.mediumWhite};
  margin-top: 2px;
`;

Label.defaultProps = {
  variant: 'overline',
};
