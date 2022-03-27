import { useCallback } from 'react';

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

export const useConnect = () => {
  const handlePressSuggestion = useCallback(() => {
    // TODO: implement
  }, []);

  const handlePressCreate = useCallback(() => {
    // TODO: implement
  }, []);

  return {
    handlePressSuggestion,
    handlePressCreate,
  };
};
