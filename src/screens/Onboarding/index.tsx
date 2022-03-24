import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';

export const Onboarding: Screen<'Onboarding'> = () => (
  <Container>
    <Text>Onboarding</Text>
  </Container>
);
