import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon } from "./styles";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({
  type = "primary",
  icon,
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
}
