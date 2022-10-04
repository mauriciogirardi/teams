import {} from "react";
import { IconProps } from "phosphor-react-native";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Text } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  children: string;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export function Button({
  type = "primary",
  children,
  icon: Icon,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {!!Icon && <Icon color="#fff" />}
      <Text icon={!!Icon}>{children}</Text>
    </Container>
  );
}
