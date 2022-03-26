import type { WithStyle } from '@app/types';
import { memo } from 'react';
import type { IconProps } from '@app/components/Icon/types';
import { Icon } from '@app/components/Icon';
import { Center, Container, Decorator, Title, Pressable } from './styles';

export type HeaderProps = WithStyle<{
  title?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  leftIcon?: IconProps['name'];
  rightIcon?: IconProps['name'];
  leftIconProps?: Omit<IconProps, 'name'>;
  rightIconProps?: Omit<IconProps, 'name'>;
}>;

export const Header = memo<HeaderProps>(
  ({
    title,
    leftIcon,
    rightIcon,
    leftIconProps,
    rightIconProps,
    onPressLeft,
    onPressRight,
    style,
  }) => (
    <Container style={style}>
      <Decorator>
        {leftIcon ? (
          <Pressable onPress={onPressLeft}>
            <Icon name={leftIcon} {...leftIconProps}></Icon>
          </Pressable>
        ) : null}
      </Decorator>
      <Center>{title ? <Title>{title}</Title> : null}</Center>
      <Decorator>
        {rightIcon ? (
          <Pressable onPress={onPressRight}>
            <Icon name={rightIcon} {...rightIconProps}></Icon>
          </Pressable>
        ) : null}
      </Decorator>
    </Container>
  ),
);
