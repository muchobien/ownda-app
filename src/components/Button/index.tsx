import { memo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { StyledProps } from './styles';
import { Container, Title, Inner, Pressable } from './styles';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
} & Partial<StyledProps>;

export const Button = memo<ButtonProps>(
  ({ title, variant = 'primary', onPress, style }) => (
    <Container variant={variant} style={style}>
      <Pressable onPress={onPress}>
        <Inner accessible accessibilityRole="button">
          <Title>{title}</Title>
        </Inner>
      </Pressable>
    </Container>
  ),
);
