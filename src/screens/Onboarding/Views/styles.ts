import styled from '@emotion/native';
import { Button, Text } from '@app/components';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';

export const Container = styled.View({
  paddingHorizontal: 16,
  flex: 1,
});

export const AnimatedContainer = styled(Animated.View)({
  flex: 1,
  paddingHorizontal: 16,
});

export const Title = styled(Text)({
  marginBottom: 16,
});

Title.defaultProps = {
  variant: 'h3',
};

export const ImageContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Image = styled(FastImage)({
  height: 400,
  width: '100%',
});

Image.defaultProps = {
  resizeMode: 'contain',
};

export const NextButton = styled(Button)();
NextButton.defaultProps = {
  rightIcon: 'chevronRight',
  innerStyle: {
    alignItems: 'center',
  },
};

export const Bottom = styled.View({
  justifyContent: 'flex-end',
});
