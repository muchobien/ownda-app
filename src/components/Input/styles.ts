import styled from '@emotion/native';
import { Text } from '@app/components/Text';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Icon as IconComponent } from '../Icon';
import { colors } from '@app/theme/colors';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  height: 56px;
  justify-content: center;
`;

export const InnerContainer = styled.View`
  padding: 8px 16px;
  padding-bottom: 10px;
  flex-direction: row;
`;

export const TextInputNative = styled.TextInput`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  padding-vertical: 0;
  font-family: Inter_400Regular;
  flex: 1;
`;

TextInputNative.defaultProps = {
  placeholderTextColor: colors.white70,
};

export const Label = styled(Text)`
  margin-left: 16px;
  margin-top: 8px;
`;

Label.defaultProps = {
  variant: 'label',
};

export const Pressable = styled(BorderlessButton)`
  margin-left: 16px;
`;

export const Icon = styled(IconComponent)``;

Icon.defaultProps = {
  size: 16,
};
