import { UserPlus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

export function NewGroup() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas."
        />

        <Input
          placeholder="Nova turma"
          placeholderTextColor={COLORS.GRAY_SUBTITLE}
        />

        {/*@ts-ignore*/}
        <Button icon={UserPlus} style={{ marginTop: 20 }}>
          Criar
        </Button>
      </Content>
    </Container>
  );
}
