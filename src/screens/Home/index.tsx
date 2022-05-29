import type { Screen } from '@app/types';
import { Text } from '@app/components';
import { Container } from './styles';
import { LineGraph } from 'react-native-graph';
import type { ViewStyle } from 'react-native';

const style: ViewStyle = {
  height: 200,
  width: '100%',
};

export const Home: Screen<'Home'> = () => (
  <Container>
    <Text>Home</Text>
    <LineGraph
      enablePanGesture
      lineThickness={4}
      style={style}
      animated
      points={[
        { date: new Date(), value: 15 },
        { date: new Date(), value: -12 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 12 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 12 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 43 },
        { date: new Date(), value: -12 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 12 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 2 },
        { date: new Date(), value: 12 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 23 },
        { date: new Date(), value: 3 },
      ]}
      color="#825cff"
    />
  </Container>
);
