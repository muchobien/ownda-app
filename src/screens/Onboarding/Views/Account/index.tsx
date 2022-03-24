import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from '../styles';

export const Account: Screen<'Onboarding'> = () => (
  <Container>
    <Text>Account</Text>
  </Container>
);
