import type { Screen } from '@app/types';
import { useConnect } from './connect';
import { EmailInput, PasswordInput, Title, Submit, Container } from './styles';

export const Login: Screen<'Login'> = props => {
  const { control, refs, onSubmit, isSubmitting } = useConnect(props);
  return (
    <Container>
      <Title>Login</Title>
      <EmailInput
        control={control}
        name="email"
        label="Email"
        autoComplete="email"
        nextInputRef={refs.password}
      />
      <PasswordInput
        ref={refs.password}
        control={control}
        name="password"
        type="password"
        label="Password"
        autoComplete="password"
      />
      <Submit title="Submit" onPress={onSubmit} loading={isSubmitting} />
    </Container>
  );
};
