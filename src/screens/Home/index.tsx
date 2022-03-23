import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Home: Screen<'Home'> = () => (
  <Container>
    <Text>Home</Text>
  </Container>
);
