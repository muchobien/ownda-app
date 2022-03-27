import styled from '@emotion/native';
import { Chip as ChipBase } from '@app/components';

export const Row = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingHorizontal: 8,
});

export const Chip = styled(ChipBase)({
  margin: 4,
});

export const Container = styled.View({
  flex: 1,
});

export const InnerContainer = styled.View({
  marginHorizontal: 16,
  flex: 1,
});
