import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FunctionComponent } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Auth: undefined;
  Onboarding: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type TabScreenName = keyof RootTabParamList;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Screen<
  S extends keyof RootStackParamList | keyof RootTabParamList,
> = S extends keyof RootStackParamList
  ? FunctionComponent<RootStackScreenProps<S>>
  : S extends keyof RootTabParamList
  ? FunctionComponent<RootTabScreenProps<S>>
  : never;

export type ConnectProps<
  S extends keyof RootStackParamList | keyof RootTabParamList,
  P extends Record<string, unknown> = Record<string, unknown>,
> = S extends keyof RootStackParamList
  ? RootStackScreenProps<S> & P
  : S extends keyof RootTabParamList
  ? RootTabScreenProps<S> & P
  : never;
