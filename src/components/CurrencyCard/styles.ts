import type { WithStyle } from '@app/types';
import styled from '@emotion/native';
import { RectButton } from 'react-native-gesture-handler';

export type HeaderProps = WithStyle<{
  countryCode: string;
  selected?: boolean;
  onPress?: (_value: string) => void;
}>;

type StyledProps = Pick<HeaderProps, 'selected'>;

export const Container = styled.View<StyledProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.ivy80 : theme.colors.surface};
  border-radius: 8px;
  height: 56px;

  overflow: hidden;
`;

export const Pressable = styled(RectButton)({
  flexGrow: 1,
});

export const Inner = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`;
