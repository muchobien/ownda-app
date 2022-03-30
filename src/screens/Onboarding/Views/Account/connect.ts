import { useCallback } from 'react';
import type { ViewProps } from '../types';

export const suggestions = [
  {
    name: 'Cash',
    selected: false,
  },
  {
    name: 'Bank',
    selected: false,
  },
  {
    name: 'Add new',
    selected: true,
  },
];

export const useConnect = ({ onPressNext }: ViewProps) => {
  const handlePressSuggestion = useCallback(() => {
    // TODO: implement
    onPressNext();
  }, [onPressNext]);

  const handlePressCreate = useCallback(() => {
    // TODO: implement
    onPressNext();
  }, [onPressNext]);

  return {
    handlePressSuggestion,
    handlePressCreate,
  };
};
