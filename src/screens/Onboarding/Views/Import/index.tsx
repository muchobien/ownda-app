import { Text } from '@app/components';
import { ImportButton } from './styles';
import { Container, Image, NextButton, Title, ImageContainer } from '../styles';
import download from '@app/assets/images/download.png';
import type { View } from '../types';

export const Import: View = ({ onPressNext }) => (
  <Container>
    <Title variant="h1">Import CSV file</Title>
    <Text variant="h5">from Ownda or another app</Text>
    <ImageContainer>
      <Image source={download} />
    </ImageContainer>
    <ImportButton title="Import backup file" />
    <NextButton title="Start fresh" onPress={onPressNext} />
  </Container>
);
