import { memo } from 'react';
import { Blur, HeaderText, HeaderContainer, Amount, Separator } from './styles';

type HeaderProps = {
  title: string;
};

type ViewProps = {
  amount: string;
  first: boolean;
  last: boolean;
};

export const TransactionCard = {
  View: memo<ViewProps>(({ amount, first, last }) => (
    <Blur first={first} last={last}>
      <Amount>{amount}</Amount>
    </Blur>
  )),
  Header: memo<HeaderProps>(({ title }) => (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  )),
  Spacer: memo(() => <Separator></Separator>),
};
