import styled, { css } from '@emotion/native';
import { Text } from '@app/components/Text';
import type { Theme } from '@emotion/react';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '@app/theme/colors';
import { Platform } from 'react-native';

export const variants = {
  primary: (theme: Theme) => css`
    background-color: ${theme.colors.ivy};
  `,
};

export type StyledProps = {
  variant: keyof typeof variants;
};

export const Container = styled.View<StyledProps>`
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  ${({ variant, theme }) => variants[variant](theme)}
`;

export const Inner = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)``;

Title.defaultProps = {
  variant: 'button',
};

export const Pressable = styled(RectButton)`
  flex-grow: 1;
`;

Pressable.defaultProps = {
  rippleColor: 'rgba(0, 0, 0, 0.22)',
  activeOpacity: 0.22,
};

export const Loader = styled.ActivityIndicator``;

Loader.defaultProps = {
  color: colors.white70,
  size: Platform.select({ android: 'large', default: 'small' }),
};
