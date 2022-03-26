import styled from '@emotion/native';
import { Header as BaseHeader, SafeView } from '@app/components';
import { PagerView } from 'react-native-pager-view';

export const Container = styled(SafeView)`
  padding-horizontal: 0;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Pager = styled(PagerView)({
  flex: 1,
});

Pager.defaultProps = {
  scrollEnabled: false,
};

export const PageView = styled.View({
  flex: 1,
});

export const Header = styled(BaseHeader)({
  marginBottom: 24,
});

Header.defaultProps = {
  leftIcon: 'chevronLeft',
  leftIconProps: {
    size: 32,
  },
};
