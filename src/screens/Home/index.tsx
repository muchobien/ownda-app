import React from 'react';
import type { Tab } from '@app/types';
import { Text } from 'react-native';
import { SafeView } from '@app/components';

export const Home: Tab<'Home'> = () => (
  <SafeView>
    <Text>Home</Text>
  </SafeView>
);
