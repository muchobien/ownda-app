import { Button, Input, SafeView, Text } from '@app/components';
import styled from '@emotion/native';

export const EmailInput = styled(Input)`
  margin-bottom: 40px;
` as typeof Input;

export const PasswordInput = styled(Input)`
  margin-bottom: 40px;
` as typeof Input;

export const Title = styled(Text)`
  margin-top: 16px;
  margin-bottom: 48px;
`;

Title.defaultProps = {
  variant: 'h1',
};

export const Submit = styled(Button)`
  margin-top: auto;
`;

export const Container = styled(SafeView)`
  padding-bottom: 20px;
`;
