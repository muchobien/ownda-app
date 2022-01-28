import styled from '@emotion/native';
import { Text } from '@app/components/Text';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
`;

export const InnerContainer = styled.View`
  padding: 8px 16px;
  padding-bottom: 10px;
`;

export const TextInputNative = styled.TextInput`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  padding-vertical: 0;
  font-family: Inter_400Regular;
`;

export const Label = styled(Text)`
  margin-left: 16px;
  margin-top: 8px;
`;

Label.defaultProps = {
  variant: 'label',
};
