import { memo } from 'react';
import { Container, Spacer, Card, Blur, Name, Balance } from './styles';

export type AccountCardProps = {
  name: string;
  balance: number;
  color: string;
};

export const AccountCard = {
  View: memo<AccountCardProps>(({ name, color, balance }) => (
    <Container>
      <Card>
        <Blur color={color}>
          <Name>{name}</Name>
          <Balance>{balance}€</Balance>
        </Blur>
      </Card>
    </Container>
  )),
  Spacer: memo(() => <Spacer />),
};
