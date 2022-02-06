import type { AccountsQuery } from '@app/generated/graphql';

export const homeAccount = ({
  id,
  name,
  color,
}: AccountsQuery['accounts'][number]) => ({
  id,
  name,
  color,
  balance: 1000,
});

export type HomeAccount = ReturnType<typeof homeAccount>;

export type PlaceHolder = {
  id: string;
};

export type HomeTransaction =
  AccountsQuery['accounts'][number]['transactions'][number];
