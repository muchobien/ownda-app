import type { Screen } from '@app/types';
import { Container } from './styles';
import { Import, Currency, Account, Category } from './Views';

export const Onboarding: Screen<'Onboarding'> = props => (
  <Container>
    <Import key="import" {...props} />
    <Currency key="currency" {...props} />
    <Account key="account" {...props} />
    <Category key="category" {...props} />
  </Container>
);
