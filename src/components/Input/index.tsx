import { TextInputProps } from "react-native";
import { Container } from "./styles";

type InputProps = TextInputProps & { placeholderTextColor?: string };

export function Input({ ...rest }: InputProps) {
  return <Container {...rest} />;
}
