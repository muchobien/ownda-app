import type { Screen } from '@app/types';
import { useConnect } from './connect';
import { Title, Google, Offline, Apple, Container } from './styles';

export const Auth: Screen<'Auth'> = props => {
  const { handleApple, handleGoogle, handleOffline } = useConnect(props);

  return (
    <Container>
      <Title>Ownda</Title>
      <Google title="Login with Google" onPress={handleGoogle} />
      <Apple title="Login with Apple" onPress={handleApple} />
      <Offline title="Offline account" onPress={handleOffline} />
    </Container>
  );
};
