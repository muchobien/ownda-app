import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  padding-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

SafeView.defaultProps = {
  edges: ['top', 'bottom'],
  mode: 'padding',
};
