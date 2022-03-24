import type { Screen } from '@app/types';
import { SafeView, Text } from '@app/components';

export const Account: Screen<'Onboarding'> = () => (
  <SafeView>
    <Text>Account</Text>
  </SafeView>
);
