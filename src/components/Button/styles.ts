import styled, { css } from '@emotion/native';
import { Text } from '@app/components/Text';
import type { Theme } from '@emotion/react';

export const variants = {
  primary: (theme: Theme) => css`
    background-color: ${theme.colors.ivy};
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
};

export type StyledProps = {
  variant: keyof typeof variants;
};

export const Container = styled.View``;

export const Inner = styled.View<StyledProps>`
  height: 48px;
  border-radius: 8px;
  ${({ variant, theme }) => variants[variant](theme)}
`;

export const Title = styled(Text)``;

export const Pressable = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.transparent};
`;
