import type { AccountsQuery } from '@app/generated/graphql';

export const homeAccount = ({
  node: { id, name, color },
}: AccountsQuery['accounts']['edges'][number]) => ({
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
  AccountsQuery['accounts']['edges'][number]['node']['transactions']['edges'][number]['node'];
