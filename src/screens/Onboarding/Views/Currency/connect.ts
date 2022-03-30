import { useInputRefs } from '@app/hooks';
import { currency, isoCurrencyCodes } from '@app/utils/localization';
import { PlainObject } from '@app/utils/object';
import { useCallback, useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { StyleProp, ViewStyle } from 'react-native';
import { Keyboard } from 'react-native';
import { useLayout, useKeyboard } from '@react-native-community/hooks';

const defaultValues = {
  search: '',
  selected: currency ?? 'USD',
};

type Form = typeof defaultValues;

export const useConnect = () => {
  const refs = useInputRefs(PlainObject.keys(defaultValues));
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm<Form>({
    defaultValues,
  });

  const { onLayout: handleLayoutBottom, height: heightBottom } = useLayout();
  const { keyboardHeight, keyboardShown } = useKeyboard();

  const selected = watch('selected');
  const search = watch('search');

  const values = useMemo(() => {
    if (search === '') return isoCurrencyCodes;
    return isoCurrencyCodes.filter(item =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const submitHandler = useCallback<SubmitHandler<Form>>(form => {
    console.log(form);
  }, []);

  const onSubmit = useMemo(
    () => handleSubmit(submitHandler),
    [handleSubmit, submitHandler],
  );

  const handlePress = useCallback(
    (value: string) => {
      setValue('selected', value);
      Keyboard.dismiss();
    },
    [setValue],
  );

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    if (keyboardShown) {
      return {
        paddingBottom: keyboardHeight + 8,
      };
    }
    return { paddingBottom: heightBottom + 8 };
  }, [heightBottom, keyboardHeight, keyboardShown]);

  return {
    contentContainerStyle,
    control,
    handleLayoutBottom,
    handlePress,
    isSubmitting,
    keyboardShown,
    onSubmit,
    refs,
    selected,
    values,
  };
};
