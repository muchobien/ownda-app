import type { FC } from 'react';
import React, { createContext, useState, useMemo, useCallback } from 'react';
import type { LayoutChangeEvent } from 'react-native';

type TabBarHeightContextValue = {
  height: number;
  updateHeight: (_e: LayoutChangeEvent) => void;
};

export const TabBarHeightContext = createContext<TabBarHeightContextValue>(
  {} as TabBarHeightContextValue,
);

export const TabBarHeightProvider: FC = ({ children }) => {
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      setHeight(layout.height);
    },
    [],
  );

  const value = useMemo<TabBarHeightContextValue>(
    () => ({ height, updateHeight }),
    [height, updateHeight],
  );

  return (
    <TabBarHeightContext.Provider value={value}>
      {children}
    </TabBarHeightContext.Provider>
  );
};
