import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { TextInput } from 'react-native';
import {
  Container,
  InnerContainer,
  TextInputNative,
  Label,
  Pressable,
  Icon,
} from './styles';
import type { InputProps } from './logic';
import { useLogic } from './logic';
import type { FieldValues } from 'react-hook-form';

function InnerInput<T extends FieldValues = FieldValues>(
  { style, inputStyle, label, autoComplete, ...props }: InputProps<T>,
  ref: ForwardedRef<TextInput>,
) {
  const {
    onBlur,
    onChange,
    value,
    onSubmitEditing,
    returnKeyType,
    secureTextEntry,
    secure,
    handleIconPress,
  } = useLogic(props);

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
          secureTextEntry={secure}
          autoComplete={autoComplete}
          autoCapitalize="none"
        />
        {secureTextEntry ? (
          <Pressable enabled={secureTextEntry} onPress={handleIconPress}>
            <Icon name={secure ? 'eyeSlash' : 'eye'} />
          </Pressable>
        ) : null}
      </InnerContainer>
    </Container>
  );
}

export const Input = forwardRef(InnerInput);
