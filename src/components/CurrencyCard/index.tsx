import { memo, useCallback } from 'react';
import { Text } from '@app/components/Text';
import type { HeaderProps } from './styles';
import { Container, Pressable, Inner } from './styles';

export const CurrencyCard = memo<HeaderProps>(
  ({ countryCode, selected = false, onPress, style }) => {
    const handlePress = useCallback(() => {
      onPress?.(countryCode);
    }, [countryCode, onPress]);

    return (
      <Container style={style} selected={selected}>
        <Pressable onPress={handlePress} enabled={!!onPress}>
          <Inner>
            <Text variant="h4">{countryCode}</Text>
          </Inner>
        </Pressable>
      </Container>
    );
  },
);
