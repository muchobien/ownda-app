import { Button, SafeView, Text } from '@app/components';
import styled from '@emotion/native';

export const Container = styled(SafeView)`
  padding-bottom: 20px;
`;

export const Title = styled(Text)`
  margin-top: 16px;
  margin-bottom: 48px;
`;
Title.defaultProps = {
  variant: 'h1',
};

export const Google = styled(Button)({
  marginBottom: 16,
});
Google.defaultProps = {
  leftIcon: 'google',
};

export const Apple = styled(Button)({
  marginBottom: 16,
});
Apple.defaultProps = {
  leftIcon: 'apple',
};

export const Offline = styled(Button)({});
Offline.defaultProps = {
  leftIcon: 'shield',
};
