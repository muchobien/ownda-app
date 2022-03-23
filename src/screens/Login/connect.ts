import { useInputRefs } from '@app/hooks';
import type { ConnectProps } from '@app/types';
import { PlainObject, store } from '@app/utils';
import { useCallback, useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
};

type Form = typeof defaultValues;

export const useConnect = (_: ConnectProps<'Login'>) => {
  const refs = useInputRefs(PlainObject.keys(defaultValues));
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Form>({
    defaultValues,
  });

  const submitHandler = useCallback<SubmitHandler<Form>>(async () => {
    store.set('@logged', true);
  }, []);

  const onSubmit = useMemo(
    () => handleSubmit(submitHandler),
    [handleSubmit, submitHandler],
  );

  return { control, refs, onSubmit, isSubmitting };
};
