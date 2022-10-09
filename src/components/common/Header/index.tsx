import { Container, Logo, BackIcon, SunIcon, MoonIcon } from "./styles";

import logoImg from "@assets/logo.png";
import { useTheme } from "@context/ThemeContext";
import { TouchableOpacity } from "react-native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const { toggle, handleToggle } = useTheme();

  return (
    <>
      <Container>
        {showBackButton && (
          <TouchableOpacity>
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
