import type { Screen } from '@app/types';

import { EmailInput, PasswordInput, Title, Submit, Container } from './styles';

export const Login: Screen<'Login'> = () => {
  return (
    <Container>
      <Title>Login</Title>
      <EmailInput label="Email" />
      <PasswordInput label="Password" />
      <Submit title="Submit" />
    </Container>
  );
};
