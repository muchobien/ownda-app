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
      <Card color={color}>
        <Blur>
          <Name>{name}</Name>
          <Balance>{balance}€</Balance>
        </Blur>
      </Card>
    </Container>
  )),
  Spacer: memo(() => <Spacer />),
};
