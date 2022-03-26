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
  {
    style,
    inputStyle,
    label,
    autoComplete,
    onPressIcon,
    placeholder,
    ...props
  }: InputProps<T>,
  ref: ForwardedRef<TextInput>,
) {
  const {
    handleIconPress,
    keyboardType,
    onBlur,
    onChange,
    onSubmitEditing,
    returnKeyType,
    secure,
    secureTextEntry,
    type,
    value,
  } = useLogic(props);

  return (
    <Container style={style}>
      {label ? <Label>{label}</Label> : null}
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
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          placeholder={placeholder}
          autoCapitalize="none"
        />
        {secureTextEntry ? (
          <Pressable enabled={secureTextEntry} onPress={handleIconPress}>
            <Icon name={secure ? 'eyeSlash' : 'eye'} />
          </Pressable>
        ) : null}
        {type === 'search' ? (
          <Pressable onPress={onPressIcon}>
            <Icon name="search" />
          </Pressable>
        ) : null}
      </InnerContainer>
    </Container>
  );
}

export const Input = forwardRef(InnerInput);
