import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { StyledProps } from './styles';
import {
  pressableDefaultProps,
  Container,
  Title,
  Inner,
  Pressable,
  Icon,
  Decorator,
  Center,
} from './styles';
import type { IconName } from '@app/components/Icon/constants';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
  loading?: boolean;
  enabled?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
} & Partial<StyledProps>;

export const Button = memo<ButtonProps>(
  ({
    title,
    variant = 'primary',
    loading = false,
    enabled = !loading,
    leftIcon,
    rightIcon,
    onPress,
    style,
    innerStyle,
  }) => (
    <Container variant={variant} style={style}>
      <Pressable
        onPress={onPress}
        enabled={enabled}
        {...pressableDefaultProps[variant]}>
        <Inner accessible accessibilityRole="button">
          {loading ? (
            <Center style={innerStyle}>
              <ActivityIndicator />
            </Center>
          ) : (
            <>
              <Decorator>
                {leftIcon ? <Icon name={leftIcon} /> : null}
              </Decorator>
              <Center style={innerStyle}>
                <Title>{title}</Title>
              </Center>
              <Decorator>
                {rightIcon ? <Icon name={rightIcon} /> : null}
              </Decorator>
            </>
          )}
        </Inner>
      </Pressable>
    </Container>
  ),
);
