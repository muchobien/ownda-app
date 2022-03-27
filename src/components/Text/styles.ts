import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';

const variants = {
  h1: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 32px;
      font-family: Inter_700Bold;
    `,
  h2: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
    `,
  h3: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 24px;
      font-family: Inter_600SemiBold;
    `,
  h4: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 14px;
      font-family: Inter_600SemiBold;
    `,
  h5: (theme: Theme) =>
    css`
      font-size: 16px;
      color: ${theme.colors.white70};
      font-family: Inter_600SemiBold;
    `,
  h6: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 16px;
      font-family: Inter_700Bold;
    `,
  body: (theme: Theme) => css`
    color: ${theme.colors.white};
    font-family: Inter_400Regular;
  `,
  chip: (theme: Theme) =>
    css`
      font-size: 16px;
      color: ${theme.colors.white};
      font-family: Inter_600SemiBold;
    `,
  caption: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
    `,
  button: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 16px;
      font-family: Inter_600SemiBold;
    `,
  overline: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 12px;
      font-family: Inter_500Medium;
    `,
  small: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
    `,
  label: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 10px;
      font-family: Inter_600SemiBold;
    `,
  number: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
      font-size: 20px;
      font-family: Inter_500Medium;
      font-variant: tabular-nums;
    `,
};

export type StyledProps = {
  variant: keyof typeof variants;
};

export const RNText = styled.Text<StyledProps>`
  ${({ variant, theme }) => variants[variant](theme)}
`;
