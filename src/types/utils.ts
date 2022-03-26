/* eslint-disable no-unused-vars */
import type { ReactElement } from 'react';

import type {
  ListRenderItem as LRI,
  SectionListProps,
  SectionListRenderItem as SRI,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type PFC<P = void> = {
  (_: P): ReactElement | null;
};

export type WithoutTypename<T extends { __typename?: unknown }> = {
  [K in Exclude<keyof T, '__typename'>]: T[K];
};

export type ListRenderItem<T> = NonNullable<LRI<T>>;
export type SectionListRenderItem<T> = NonNullable<SRI<T>>;
export type KeyExtractor<T> = (_item: T, _index: number) => string;

export type SectionRenderHeader<T, U> = NonNullable<
  SectionListProps<T, U>['renderSectionHeader']
>;

export type KeysOfType<O, T> = {
  [K in keyof O]: O[K] extends T ? K : never;
}[keyof O];

type Key = `${string}Style` | 'style';

export type WithStyle<
  T extends Record<string, unknown>,
  K extends Key = 'style',
> = T & {
  [key in K]?: StyleProp<ViewStyle>;
};
