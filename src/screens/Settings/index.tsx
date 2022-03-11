import type { Screen } from '@app/types';
import { Button, SafeView, Text } from '@app/components';
import { useLogout } from '@app/hooks/me';
import { useLinkToken } from '@app/hooks/plaid';
import type { LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';
import { PlaidLink } from 'react-native-plaid-link-sdk';

export const Settings: Screen<'Settings'> = () => {
  const { logout } = useLogout();
  const { loading, linkToken } = useLinkToken();

  console.log('linkToken', linkToken);

  return (
    <SafeView>
      <PlaidLink
        tokenConfig={{
          token: linkToken!,
          noLoadingState: loading,
        }}
        onSuccess={(success: LinkSuccess) => {
          console.log(success);
        }}
        onExit={(exit: LinkExit) => {
          console.log(exit);
        }}
      >
        <Text>Add Account</Text>
      </PlaidLink>
      <Button title="Logout" onPress={logout} />
    </SafeView>
  );
};
