import styled from '@emotion/native';
import { BlurView } from 'expo-blur';
import { Text } from '@app/components/Text';
import type { TransactionTypeEnum } from '@app/generated/graphql';

export const Blur = styled(BlurView)<{ first: boolean; last: boolean }>(
  ({ first, last }) => ({
    borderTopLeftRadius: first ? 16 : undefined,
    borderTopRightRadius: first ? 16 : undefined,
    borderBottomLeftRadius: last ? 16 : undefined,
    borderBottomRightRadius: last ? 16 : undefined,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  }),
);

Blur.defaultProps = {
  tint: 'dark',
  intensity: 70,
};

export const Title = styled(Text)({});

Title.defaultProps = {
  variant: 'h4',
};

export const HeaderText = styled(Text)(({ theme }) => ({
  fontSize: 12,
  color: theme.colors.white70,
}));

export const HeaderContainer = styled.View({
  paddingVertical: 24,
});

export const Amount = styled(Text)<{ type: TransactionTypeEnum }>(
  ({ type, theme }) => ({
    marginLeft: 'auto',
    fontSize: 14,
    color: type === 'INCOME' ? theme.colors.green : theme.colors.red,
  }),
);

Amount.defaultProps = {
  variant: 'number',
};

export const Separator = styled.View({});

export const Row = styled.View({
  flexDirection: 'row',
  flex: 1,
  alignSelf: 'flex-start',
});

export const Box = styled.View({
  width: 32,
  aspectRatio: 1,
  marginRight: 16,
  borderRadius: 16,
  backgroundColor: '#fff',
});
