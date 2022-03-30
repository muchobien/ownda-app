import {
  Container,
  InnerContainer,
  Row,
  Chip,
  Bottom,
  NextButton,
} from './styles';
import { Title, Subtitle, ImageContainer, Image } from '../styles';
import type { View } from '../types';
import badge from '@app/assets/images/badge.png';
import { suggestions, useConnect } from './connect';

export const Category: View = ({ onPressNext }) => {
  const { handleLayoutBottom, contentContainerStyle, handlePressFinish } =
    useConnect();

  return (
    <>
      <Container contentContainerStyle={contentContainerStyle}>
        <InnerContainer>
          <Title variant="h1">Category</Title>
          <ImageContainer>
            <Image source={badge} />
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
              onPress={onPressNext}
            />
          ))}
        </Row>
      </Container>
      <Bottom onLayout={handleLayoutBottom}>
        <NextButton title="Finish" onPress={handlePressFinish} />
      </Bottom>
    </>
  );
};
