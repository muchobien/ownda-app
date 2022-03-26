import type { StyledComponent } from '@emotion/native';
import styled from '@emotion/native';
import type { FlatListProps } from 'react-native';
import { CurrencyCard } from '@app/components';
import type { LinearGradientProps } from 'expo-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@app/theme/colors';

export const Separator = styled.View({
  height: 8,
});

export const List = styled.FlatList({
  marginTop: 20,
}) as StyledComponent<FlatListProps<string>>;

List.defaultProps = {
  showsVerticalScrollIndicator: false,
  ItemSeparatorComponent: Separator,
};

export const SelectedCurrency = styled(CurrencyCard)({
  marginBottom: 20,
});

SelectedCurrency.defaultProps = {
  selected: true,
};

export const Bottom = styled(LinearGradient)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  paddingHorizontal: 16,
  paddingBottom: theme.device.insets.bottom,
})) as StyledComponent<Partial<LinearGradientProps>>;

Bottom.defaultProps = {
  colors: [colors.background0, colors.background50, colors.background100],
  locations: [0, 0.4, 0.8],
};
