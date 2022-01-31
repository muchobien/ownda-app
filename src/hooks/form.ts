import { createRef, useMemo } from 'react';
import type { TextInput } from 'react-native';

export const useInputRefs = <T extends string>(names: T[]) => {
  const refs = useMemo(
    () =>
      names.reduce(
        (all, name) => ({ ...all, [name]: createRef<TextInput>() }),
        {} as Record<T, React.RefObject<TextInput>>,
      ),
    [names],
  );

  return refs;
};
