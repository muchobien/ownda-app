import type { WithStyle } from '@app/types';
import styled from '@emotion/native';
import { RectButton } from 'react-native-gesture-handler';
import type { IconName } from '@app/components/Icon/constants';
import BaseIcon from '@app/components/Icon';
import { Text } from '@app/components/Text';

export type ChipProps = WithStyle<{
  title: string;
  icon: IconName;
  onPress?: () => void;
  selected?: boolean;
}>;

export type StyleProps = Pick<ChipProps, 'selected'>;

export const Container = styled.View<StyleProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.ivy : theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
`;

export const Pressable = styled(RectButton)({
  flexGrow: 1,
});

export const Inner = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const Decorator = styled.View({ paddingHorizontal: 16, width: 56 });

export const Icon = styled(BaseIcon)();
Icon.defaultProps = {
  filled: true,
};

export const Title = styled(Text)({
  marginLeft: 8,
});
Title.defaultProps = {
  variant: 'chip',
};
