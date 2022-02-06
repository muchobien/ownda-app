import styled from '@emotion/native';
import { BlurView } from 'expo-blur';
import { Text } from '@app/components/Text';

export const Blur = styled(BlurView)<{ first: boolean; last: boolean }>(
  ({ first, last }) => ({
    borderTopLeftRadius: first ? 16 : undefined,
    borderTopRightRadius: first ? 16 : undefined,
    borderBottomLeftRadius: last ? 16 : undefined,
    borderBottomRightRadius: last ? 16 : undefined,
    overflow: 'hidden',
    flexDirection: 'row',
    padding: 16,
  }),
);

Blur.defaultProps = {
  tint: 'dark',
  intensity: 70,
};

export const HeaderText = styled(Text)({});

export const HeaderContainer = styled.View({
  paddingVertical: 24,
});

export const Amount = styled(Text)({});

export const Separator = styled.View({});
