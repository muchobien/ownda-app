import type { Screen } from '@app/types';
import { Button, SafeView } from '@app/components';
import { useLogout } from '@app/hooks';

export const Settings: Screen<'Settings'> = () => {
  const { logout } = useLogout();

  return (
    <SafeView>
      <Button title="Logout" onPress={logout} />
    </SafeView>
  );
};
