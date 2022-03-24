/* eslint-disable @typescript-eslint/no-explicit-any */
import { SafeView } from '@app/components';
import { width } from '@app/theme';
import type { StyledComponent } from '@emotion/native';
import styled from '@emotion/native';
import type { FlatListProps } from 'react-native';
import { StyleSheet } from 'react-native';

export const Container = styled(SafeView)`
  padding-horizontal: 0;
  padding-top: 16px;
`;

export const FlatList: StyledComponent<FlatListProps<any>> = styled.FlatList(
  {},
);

FlatList.defaultProps = {
  horizontal: true,
  decelerationRate: 0,
  showsHorizontalScrollIndicator: false,
  snapToInterval: width * 0.8,
  scrollEventThrottle: 16,
  style: {
    minHeight: 205,
    maxHeight: 205,
    flexGrow: 0,
    marginBottom: 16,
  },
};

export const SectionListStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
