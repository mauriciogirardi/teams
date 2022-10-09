import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

export type FilterStyleProps = {
  isActive?: boolean;
};

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ isActive = false, title, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
