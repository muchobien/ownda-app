import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { Item } from './Item';
import { Container } from './styles';

export const TabBar = memo(({ state, navigation }: BottomTabBarProps) => (
  <Container>
    {state.routes.map((route, index) => (
      <Item
        key={route.key}
        name={route.name}
        focused={index === state.index}
        navigation={navigation}
      />
    ))}
  </Container>
));
