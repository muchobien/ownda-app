import type {
  Screen,
  ListRenderItem,
  KeyExtractor,
  SectionListRenderItem,
  SectionRenderHeader,
} from '@app/types';
import { AccountCard, TransactionCard } from '@app/components';
import { Container, FlatList, SectionListStyles } from './styles';
import { useConnect, isAccount } from './connect';
import { SectionList } from 'react-native';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import type { HomeAccount, HomeTransaction } from '@app/format/account';

export const Home: Screen<'Home'> = () => {
  const { accounts, handleAccountChange, transactions, height } = useConnect();

  const accountRenderItem = useCallback<ListRenderItem<HomeAccount>>(
    ({ item }) =>
      isAccount(item) ? (
        <AccountCard.View
          name={item.name}
          color={item.color}
          balance={item.balance}
        />
      ) : (
        <AccountCard.Spacer />
      ),
    [],
  );

  const keyExtractor = useCallback<KeyExtractor>(item => item.id, []);

  const sectionRenderItem = useCallback<SectionListRenderItem<HomeTransaction>>(
    ({ item, index, section }) => (
      <TransactionCard.View
        name={item.name}
        amount={item.amount}
        first={index === 0}
        type={item.kind}
        last={index === section.data.length - 1}
      />
    ),
    [],
  );

  const sectionRenderHeader = useCallback<
    SectionRenderHeader<HomeTransaction, { date: string }>
  >(
    ({ section }) => (
      <TransactionCard.Header
        title={dayjs.utc(section.date).format('DD  MMMM  YYYY')}
      />
    ),
    [],
  );

  return (
    <Container>
      <FlatList
        data={accounts}
        keyExtractor={keyExtractor}
        renderItem={accountRenderItem}
        onScroll={handleAccountChange}
      />
      <SectionList
        stickySectionHeadersEnabled={false}
        keyExtractor={keyExtractor}
        sections={transactions}
        contentContainerStyle={[
          SectionListStyles.container,
          { paddingBottom: height },
        ]}
        renderItem={sectionRenderItem}
        renderSectionHeader={sectionRenderHeader}
      />
    </Container>
  );
};
