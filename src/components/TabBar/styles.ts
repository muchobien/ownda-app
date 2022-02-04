import styled from '@emotion/native';
import { BlurView } from 'expo-blur';

export const Container = styled(BlurView)`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  flex-direction: row;
`;

Container.defaultProps = {
  tint: 'dark',
  intensity: 70,
};
