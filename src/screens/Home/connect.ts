import type {
  HomeAccount,
  HomeTransaction,
  PlaceHolder,
} from '@app/format/account';
import { homeAccount } from '@app/format/account';
import { useAccounts } from '@app/hooks/account';
import { width } from '@app/theme';
import { useCallback, useMemo, useState } from 'react';
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import R from 'ramda';
import dayjs from 'dayjs';
import { useTabBarHeight } from '@app/hooks';

export const useConnect = () => {
  const { data } = useAccounts();
  const { height } = useTabBarHeight();
  const [currentAccount, setCurrentAccount] = useState(1);

  const accounts = useMemo(
    () => [
      { id: 'left-spacer' },
      ...(data?.accounts.edges.map(homeAccount) ?? []),
      { id: 'right-spacer' },
    ],
    [data],
  );

  const transactionsMap = useMemo(
    () =>
      (data?.accounts.edges ?? []).reduce<Record<string, HomeTransaction[]>>(
        (acc, account) => ({
          ...acc,
          [account.node.id]: account.node.transactions.edges.map(e => e.node),
        }),
        {},
      ),
    [data],
  );

  const accountTransactions = useMemo(() => {
    const accountId = accounts?.[currentAccount]?.id;
    return accountId ? transactionsMap[accountId] ?? [] : [];
  }, [transactionsMap, accounts, currentAccount]);

  const transactions = useMemo(
    () =>
      R.compose(
        R.map<
          [string, HomeTransaction[]],
          { date: string; data: HomeTransaction[] }
        >(([date, data]) => ({ date, data })),
        R.toPairs,
        R.groupBy<HomeTransaction>(({ createdAt }) =>
          dayjs(createdAt).format('YYYY-MM-DD'),
        ),
      )(accountTransactions).reverse(),
    [accountTransactions],
  );

  const handleAccountChange = useCallback(
    ({
      nativeEvent: {
        contentOffset: { x },
      },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(x / (width * 0.8));
      setCurrentAccount(index + 1);
    },
    [],
  );

  return {
    accounts,
    handleAccountChange,
    currentAccount,
    transactions,
    height,
  };
};

export type Connect = ReturnType<typeof useConnect>;

export const isAccount = (
  account: HomeAccount | PlaceHolder,
): account is HomeAccount => (account as HomeAccount).name !== undefined;
