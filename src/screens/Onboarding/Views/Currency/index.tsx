import { Container, NextButton, Title } from '../styles';
import type { View } from '../types';
import { useCallback } from 'react';
import { Input, CurrencyCard } from '@app/components';
import { useConnect } from './connect';
import { List, SelectedCurrency, Bottom } from './styles';
import type { KeyExtractor, ListRenderItem } from '@app/types';

export const Currency: View = ({ onPressNext }) => {
  const { control, selected, keyboardWillShow, handlePress, values } =
    useConnect();

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
    <Container>
      {!keyboardWillShow ? (
        <>
          <Title variant="h1">Set Currency</Title>
          <SelectedCurrency countryCode={selected} selected />
        </>
      ) : null}
      <Input
        name="search"
        type="search"
        placeholder="Search (e.g. USD, EUR, GBP)"
        control={control}
      />
      <List data={values} renderItem={renderItem} keyExtractor={keyExtractor} />
      <Bottom>
        <NextButton title="Set" onPress={onPressNext} />
      </Bottom>
    </Container>
  );
};
