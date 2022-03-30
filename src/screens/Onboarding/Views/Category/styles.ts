import type { StyledComponent } from '@emotion/native';
import styled from '@emotion/native';
import { Button, Chip as ChipBase } from '@app/components';
import type { LinearGradientProps } from 'expo-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@app/theme/colors';

export const Row = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingHorizontal: 8,
});

export const Chip = styled(ChipBase)({
  margin: 4,
});

export const Container = styled.ScrollView({});
Container.defaultProps = {
  showsVerticalScrollIndicator: false,
};

export const InnerContainer = styled.View({
  marginHorizontal: 16,
  flex: 1,
});

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

export const NextButton = styled(Button)();
