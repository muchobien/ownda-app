import { forwardRef } from 'react';
import type {
  TextInputProps,
  TextInput,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Container, InnerContainer, TextInputNative, Label } from './styles';

export type InputProps = TextInputProps & {
  label: string;

  inputStyle?: StyleProp<ViewStyle>;
};

export const Input = forwardRef<TextInput, InputProps>(
  ({ style, inputStyle, label, ...props }, ref) => (
    <Container style={style}>
      <Label>{label}</Label>
      <InnerContainer>
        <TextInputNative ref={ref} style={inputStyle} {...props} />
      </InnerContainer>
    </Container>
  ),
);
