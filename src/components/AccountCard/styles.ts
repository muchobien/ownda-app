import styled from '@emotion/native';
import { BlurView } from 'expo-blur';
import { Text } from '@app/components/Text';

export const Container = styled.View(({ theme }) => ({
  width: theme.device.width * 0.8,
  height: 205,
}));

export const Card = styled.View<{ color: string }>(({ color }) => ({
  flex: 1,
  borderRadius: 16,
  overflow: 'hidden',
  marginHorizontal: 18,
  backgroundColor: color,
}));

export const Blur = styled(BlurView)({
  flex: 1,
  padding: 20,
});

Blur.defaultProps = {
  tint: 'dark',
  intensity: 70,
};

export const Spacer = styled.View(({ theme }) => ({
  width: (theme.device.width - theme.device.width * 0.8) / 2,
}));

export const Name = styled(Text)({});

Name.defaultProps = {
  variant: 'h3',
};

export const Balance = styled(Text)({
  marginTop: 'auto',
  marginLeft: 'auto',
});

Balance.defaultProps = {
  variant: 'number',
};
