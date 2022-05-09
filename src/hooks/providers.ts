import { DatabaseContext } from '@app/db';
import { TabBarHeightContext } from '@app/providers';
import { useContext } from 'react';

export const useTabBarHeight = () => {
  const context = useContext(TabBarHeightContext);
  if (context === undefined) {
    throw new Error('TabBarHeightContext is not defined');
  }
  return context;
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};
