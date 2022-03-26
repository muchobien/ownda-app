import styled from '@emotion/native';
import { Header as BaseHeader, SafeView } from '@app/components';
import { PagerView } from 'react-native-pager-view';

export const Container = styled(SafeView)`
  padding-horizontal: 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
Container.defaultProps = {
  edges: ['top'],
};

export const Pager = styled(PagerView)({
  flex: 1,
});

Pager.defaultProps = {
  scrollEnabled: false,
};

export const PageView = styled.View(({ theme }) => ({
  flex: 1,
  paddingBottom: theme.device.insets.bottom,
}));

export const UnsafePageView = styled.View({
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
