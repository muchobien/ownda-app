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
  innerStyle: {
    alignItems: 'flex-start',
  },
};

export const Apple = styled(Button)({
  marginBottom: 16,
});
Apple.defaultProps = {
  leftIcon: 'apple',
  innerStyle: {
    alignItems: 'flex-start',
  },
};

export const Offline = styled(Button)({});
Offline.defaultProps = {
  leftIcon: 'shield',
  innerStyle: {
    alignItems: 'flex-start',
  },
};
