import { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { StyledProps } from './styles';
import { Container, Title, Inner, Pressable } from './styles';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
  loading?: boolean;
  enabled?: boolean;
} & Partial<StyledProps>;

export const Button = memo<ButtonProps>(
  ({
    title,
    variant = 'primary',
    loading = false,
    enabled = !loading,
    onPress,
    style,
  }) => (
    <Container variant={variant} style={style}>
      <Pressable onPress={onPress} enabled={enabled}>
        <Inner accessible accessibilityRole="button">
          {loading ? <ActivityIndicator /> : <Title>{title}</Title>}
        </Inner>
      </Pressable>
    </Container>
  ),
);
