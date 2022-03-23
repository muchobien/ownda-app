import { toPrice } from '@app/format/toPrice';
import { memo } from 'react';
import {
  Blur,
  HeaderText,
  HeaderContainer,
  Amount,
  Separator,
  Title,
  Box,
  Row,
} from './styles';

type HeaderProps = {
  title: string;
};

type ViewProps = {
  amount: number;
  name: string;
  first: boolean;
  last: boolean;
  type: string;
};

export const TransactionCard = {
  View: memo<ViewProps>(({ amount, first, last, name, type }) => (
    <Blur first={first} last={last}>
      <Box></Box>
      <Row>
        <Title>{name}</Title>
        <Amount type={type}>{toPrice(amount)} €</Amount>
      </Row>
    </Blur>
  )),
  Header: memo<HeaderProps>(({ title }) => (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  )),
  Spacer: memo(() => <Separator></Separator>),
};
