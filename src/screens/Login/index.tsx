import type { Screen } from '@app/types';
import { Text } from 'react-native';
import { SafeView } from '@app/components';

export const Login: Screen<'Login'> = () => {
  return (
    <SafeView>
      <Text>Home</Text>
    </SafeView>
  );
};
