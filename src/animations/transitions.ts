import {
  combineTransition,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated';

export const FadeUpTransition = combineTransition(FadeOutUp, FadeInUp).delay(
  300,
);
