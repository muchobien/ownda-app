import { AnimatedContainer, NextButton, Title } from '../styles';
import type { View } from '../types';
import { useCallback } from 'react';
import { Input, CurrencyCard } from '@app/components';
import { useConnect } from './connect';
import { List, SelectedCurrency, Bottom, AnimatedItem } from './styles';
import type { KeyExtractor, ListRenderItem } from '@app/types';
import { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { FadeUpTransition } from '@app/animations';

export const Currency: View = ({ onPressNext }) => {
  const {
    contentContainerStyle,
    control,
    handleLayoutBottom,
    handlePress,
    keyboardWillShow,
    selected,
    values,
  } = useConnect();

  const renderItem = useCallback<ListRenderItem<string>>(
    ({ item }) => (
      <CurrencyCard
        countryCode={item}
        selected={item === selected}
        onPress={handlePress}
      />
    ),
    [handlePress, selected],
  );

  const keyExtractor = useCallback<KeyExtractor<string>>(item => item, []);

  return (
    <AnimatedContainer layout={FadeUpTransition}>
      {!keyboardWillShow ? (
        <AnimatedItem entering={FadeInUp} exiting={FadeOutUp}>
          <Title variant="h1">Set Currency</Title>
          <SelectedCurrency countryCode={selected} selected />
        </AnimatedItem>
      ) : null}
      <AnimatedItem>
        <Input
          name="search"
          type="search"
          placeholder="Search (e.g. USD, EUR, GBP)"
          control={control}
        />
        <List
          data={values}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={contentContainerStyle}
        />
      </AnimatedItem>
      <Bottom onLayout={handleLayoutBottom}>
        <NextButton title="Set" onPress={onPressNext} />
      </Bottom>
    </AnimatedContainer>
  );
};
