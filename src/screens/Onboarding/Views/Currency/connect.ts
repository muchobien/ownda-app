import { useInputRefs } from '@app/hooks';
import { currency, isoCurrencyCodes } from '@app/utils/localization';
import { PlainObject } from '@app/utils/object';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { KeyboardEventListener } from 'react-native';
import { Keyboard } from 'react-native';

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

  const [keyboardWillShow, setKeyboardWillShow] = useState(false);

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

  const handleKeyboardWillShow: KeyboardEventListener = () => {
    setKeyboardWillShow(true);
  };

  const handleKeyboardWillHide: KeyboardEventListener = () => {
    setKeyboardWillShow(false);
  };

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow),
      Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide),
    ];

    return () => {
      subscriptions.forEach(subscription => subscription.remove());
    };
  }, []);

  return {
    control,
    handlePress,
    isSubmitting,
    keyboardWillShow,
    onSubmit,
    refs,
    selected,
    values,
  };
};
