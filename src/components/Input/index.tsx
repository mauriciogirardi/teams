import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

type InputProps = TextInputProps & {
  placeholderTextColor?: string;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
  return <Container {...rest} ref={inputRef} />;
}
