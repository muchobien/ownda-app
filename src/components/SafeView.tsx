import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  padding-horizontal: 20px;
`;

SafeView.defaultProps = {
  edges: ['top'],
};
