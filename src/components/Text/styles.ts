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
    `,
  h4: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
    `,
  h5: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
    `,
  h6: (theme: Theme) =>
    css`
      color: ${theme.colors.white};
    `,
  body: (theme: Theme) => css`
    color: ${theme.colors.white};
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
};

export type StyledProps = {
  variant: keyof typeof variants;
};

export const RNText = styled.Text<StyledProps>`
  ${({ variant, theme }) => variants[variant](theme)}
`;
