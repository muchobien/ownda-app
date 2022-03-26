import styled from '@emotion/native';
import { Text } from '@app/components/Text';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '@app/theme/colors';

export const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Decorator = styled.View({
  paddingHorizontal: 16,
  width: 66,
});

export const Center = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Title = styled(Text)``;
Title.defaultProps = {
  variant: 'h3',
};

export const Pressable = styled(RectButton)({
  borderRadius: 8,
});

Pressable.defaultProps = {
  rippleColor: colors.ivy40,
  underlayColor: colors.ivy,
  activeOpacity: 0.4,
};
