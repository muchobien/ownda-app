import { ProviderEnum } from '@app/generated/graphql';
import { useLogin } from '@app/hooks/me';
import { useInputRefs } from '@app/hooks';
import type { ConnectProps } from '@app/types';
import { PlainObject } from '@app/utils/object';
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
  const { control, handleSubmit } = useForm<Form>({
    defaultValues,
  });

  const { login } = useLogin();

  const submitHandler = useCallback<SubmitHandler<Form>>(
    async ({ email, password: hash }) => {
      await login({ email, hash, provider: ProviderEnum.Local });
    },
    [login],
  );

  const onSubmit = useMemo(
    () => handleSubmit(submitHandler),
    [handleSubmit, submitHandler],
  );

  return { control, refs, onSubmit };
};
