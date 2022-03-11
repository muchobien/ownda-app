import type { Screen } from '@app/types';
import { Button, SafeView, Text } from '@app/components';
import { useLogout } from '@app/hooks/me';
import { useLinkToken, usePlaidLink } from '@app/hooks/plaid';
import { PlaidLink } from 'react-native-plaid-link-sdk';

export const Settings: Screen<'Settings'> = () => {
  const { logout } = useLogout();
  const { loading, linkToken } = useLinkToken();
  const { registerLinkToken } = usePlaidLink();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeView>
      <PlaidLink
        tokenConfig={{
          token: linkToken!,
          noLoadingState: loading,
        }}
        onSuccess={registerLinkToken}
      >
        <Text>Add Account</Text>
      </PlaidLink>
      <Button title="Logout" onPress={logout} />
    </SafeView>
  );
};
