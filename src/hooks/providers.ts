import { TabBarHeightContext } from '@app/providers';
import { useContext } from 'react';

export const useTabBarHeight = () => useContext(TabBarHeightContext);
