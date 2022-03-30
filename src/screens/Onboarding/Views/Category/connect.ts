import { store } from '@app/utils';
import { useLayout } from '@react-native-community/hooks';
import { useCallback, useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export const suggestions = [
  {
    name: 'Food & Drinks',
    selected: false,
  },
  {
    name: 'Bills & Fees',
    selected: false,
  },
  {
    name: 'Transport',
    selected: false,
  },
  {
    name: 'Groceries',
    selected: false,
  },
  {
    name: 'Entertainment',
    selected: false,
  },
  {
    name: 'Shopping',
    selected: false,
  },
  {
    name: 'Gifts',
    selected: false,
  },
  {
    name: 'Health & Fitness',
    selected: false,
  },
  {
    name: 'Investments',
    selected: false,
  },
  {
    name: 'Loans',
    selected: false,
  },
  {
    name: 'Car',
    selected: false,
  },
  {
    name: 'Work',
    selected: false,
  },
  {
    name: 'Home',
    selected: false,
  },
  {
    name: 'Restaurent',
    selected: false,
  },
  {
    name: 'Family',
    selected: false,
  },
  {
    name: 'Social Life',
    selected: false,
  },
  {
    name: 'Travel',
    selected: false,
  },
  {
    name: 'Education',
    selected: false,
  },
  {
    name: 'Add new',
    selected: true,
  },
];

export const useConnect = () => {
  const { onLayout: handleLayoutBottom, height: heightBottom } = useLayout();

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({ paddingBottom: heightBottom + 8 }),
    [heightBottom],
  );

  const handlePressFinish = useCallback(() => {
    store.set('@logged', true);
  }, []);

  return {
    handlePressFinish,
    handleLayoutBottom,
    contentContainerStyle,
  };
};
