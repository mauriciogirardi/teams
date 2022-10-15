import { UserPlus } from "phosphor-react-native";

import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  const handleNewGroup = () =>
    navigation.navigate("players", { group: "Mauricio" });

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas."
        />

        <Input placeholder="Nova turma" />

        <Button
          icon={UserPlus}
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        >
          Criar
        </Button>
      </Content>
    </Container>
  );
}
