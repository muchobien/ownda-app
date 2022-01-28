import { memo } from 'react';
import type { TextProps as RNTextProps } from 'react-native';
import type { StyledProps } from './styles';
import { RNText } from './styles';

export type TextProps = RNTextProps & Partial<StyledProps>;

export const Text = memo<TextProps>(
  ({ variant = 'body', children, ...props }) => (
    <RNText variant={variant} {...props}>
      {children}
    </RNText>
  ),
);
