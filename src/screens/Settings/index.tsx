import type { Screen } from '@app/types';
import { Text } from 'react-native';
import { Button, SafeView } from '@app/components';
import { useLogout } from '@app/hooks/me';

export const Settings: Screen<'Settings'> = () => {
  const { logout } = useLogout();

  return (
    <SafeView>
      <Text>Settings</Text>
      <Button title="Logout" onPress={logout} />
    </SafeView>
  );
};
