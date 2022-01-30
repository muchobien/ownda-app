import type { Screen } from '@app/types';
import { Text } from 'react-native';
import { SafeView } from '@app/components';

export const Home: Screen<'Home'> = () => (
  <SafeView>
    <Text>Home</Text>
  </SafeView>
);
