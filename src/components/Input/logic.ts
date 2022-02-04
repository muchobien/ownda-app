import { callAll } from '@app/utils/func';
import type { RefObject } from 'react';
import { useState, useCallback, useMemo } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';

export interface InputProps<T extends FieldValues = FieldValues>
  extends Omit<TextInputProps, 'defaultValue'>,
    UseControllerProps<T> {
  label: string;
  inputStyle?: StyleProp<ViewStyle>;
  nextInputRef?: RefObject<TextInput>;
  type?: 'text' | 'number' | 'email' | 'password';
}

type LogicProps<T extends FieldValues = FieldValues> = Omit<
  InputProps<T>,
  'label'
>;

export const useLogic = <T extends FieldValues = FieldValues>({
  nextInputRef,
  type = 'text',
  ...props
}: LogicProps<T>) => {
  const {
    field: { onBlur, onChange, value },
  } = useController(props);
  const secureTextEntry = type === 'password';
  const [secure, setSecure] = useState(secureTextEntry);

  const returnKeyType = useMemo<ReturnKeyTypeOptions>(
    () => (nextInputRef ? 'next' : 'done'),
    [nextInputRef],
  );

  const _focusNextInput = useCallback(
    (_: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      nextInputRef?.current?.focus();
    },
    [nextInputRef],
  );

  const onSubmitEditing = callAll(_focusNextInput, props.onSubmitEditing);

  const handleIconPress = useCallback(() => {
    setSecure(prev => !prev);
  }, []);

  return {
    onBlur,
    onChange,
    onSubmitEditing,
    returnKeyType,
    value,
    secure,
    handleIconPress,
    secureTextEntry,
  };
};
