import type { ReactElement } from 'react';

export type PFC<P = void> = {
  (props: P): ReactElement | null;
};

export type WithoutTypename<T extends { __typename?: unknown }> = {
  [K in Exclude<keyof T, '__typename'>]: T[K];
};
