import styled from '@emotion/native';
import { PagerView } from 'react-native-pager-view';

export const Container = styled(PagerView)(({ theme }) => ({
  flex: 1,
  paddingHorizontal: 0,
  backgroundColor: theme.colors.background,
}));
