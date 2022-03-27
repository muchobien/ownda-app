import { memo } from 'react';
import type { ChipProps } from './styles';
import { Icon, Container, Pressable, Inner, Title } from './styles';

export const Chip = memo<ChipProps>(
  ({ title, icon, onPress, selected, style }) => (
    <Container style={style} selected={selected}>
      <Pressable onPress={onPress}>
        <Inner>
          <Icon name={icon} />
          <Title>{title}</Title>
        </Inner>
      </Pressable>
    </Container>
  ),
);
