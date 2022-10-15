import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Logo, BackIcon, SunIcon, MoonIcon } from "./styles";
import { useTheme } from "@context/ThemeContext";
import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();
  const { toggle, handleToggle } = useTheme();

  const handleGoBack = () => navigation.navigate("groups");

  return (
    <>
      <Container>
        {showBackButton && (
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon />
          </TouchableOpacity>
        )}

        <Logo source={logoImg} />

        <TouchableOpacity onPress={handleToggle}>
          {toggle ? <SunIcon /> : <MoonIcon />}
        </TouchableOpacity>
      </Container>
    </>
  );
}
