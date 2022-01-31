import type { Screen } from '@app/types';
import { useConnect } from './connect';
import { EmailInput, PasswordInput, Title, Submit, Container } from './styles';

export const Login: Screen<'Login'> = props => {
  const { control, refs, onSubmit } = useConnect(props);
  return (
    <Container>
      <Title>Login</Title>
      <EmailInput
        name="email"
        control={control}
        label="Email"
        nextInputRef={refs.password}
      />
      <PasswordInput
        ref={refs.password}
        name="password"
        control={control}
        label="Password"
      />
      <Submit title="Submit" onPress={onSubmit} />
    </Container>
  );
};
