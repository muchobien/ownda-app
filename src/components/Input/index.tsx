import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { TextInput } from 'react-native';
import { Container, InnerContainer, TextInputNative, Label } from './styles';
import type { InputProps } from './logic';
import { useLogic } from './logic';
import type { FieldValues } from 'react-hook-form';

function InnerInput<T extends FieldValues = FieldValues>(
  { style, inputStyle, label, ...props }: InputProps<T>,
  ref: ForwardedRef<TextInput>,
) {
  const { onBlur, onChange, value, onSubmitEditing, returnKeyType } =
    useLogic(props);

  return (
    <Container style={style}>
      <Label>{label}</Label>
      <InnerContainer>
        <TextInputNative
          ref={ref}
          style={inputStyle}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          autoCapitalize="none"
        />
      </InnerContainer>
    </Container>
  );
}

export const Input = forwardRef(InnerInput);
