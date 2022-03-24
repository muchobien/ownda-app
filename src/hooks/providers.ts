import { DatabaseContext } from '@app/db';
import { TabBarHeightContext } from '@app/providers';
import { useContext } from 'react';

export const useTabBarHeight = () => useContext(TabBarHeightContext);

export const useDatabase = () => useContext(DatabaseContext);
