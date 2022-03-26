import type { StyledComponent } from '@emotion/native';
import styled from '@emotion/native';
import type { FlatListProps } from 'react-native';
import { CurrencyCard } from '@app/components';

export const Separator = styled.View({
  height: 8,
});

export const List = styled.FlatList({
  marginTop: 20,
}) as StyledComponent<FlatListProps<string>>;

List.defaultProps = {
  showsVerticalScrollIndicator: false,
  ItemSeparatorComponent: Separator,
  contentContainerStyle: {
    paddingBottom: 100,
  },
};

export const SelectedCurrency = styled(CurrencyCard)({
  marginBottom: 20,
});

SelectedCurrency.defaultProps = {
  selected: true,
};

export const Bottom = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  paddingHorizontal: 16,
  paddingBottom: theme.device.insets.bottom,
}));
