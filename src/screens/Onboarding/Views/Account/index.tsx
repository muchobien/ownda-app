import { Row, Chip, Container, InnerContainer } from './styles';
import type { View } from '../types';
import React from 'react';
import { Title, Subtitle, ImageContainer, Image } from '../styles';
import wallet from '@app/assets/images/wallet.png';
import { suggestions, useConnect } from './connect';

export const Account: View = () => {
  const { handlePressSuggestion, handlePressCreate } = useConnect();

  return (
    <Container>
      <InnerContainer>
        <Title variant="h1">Add accounts</Title>
        <ImageContainer>
          <Image source={wallet} />
        </ImageContainer>
        <Subtitle>Suggestions</Subtitle>
      </InnerContainer>
      <Row>
        {suggestions.map(({ name, selected }) => (
          <Chip
            key={name}
            icon="plus"
            title={name}
            selected={selected}
            onPress={selected ? handlePressCreate : handlePressSuggestion}
          />
        ))}
      </Row>
    </Container>
  );
};
