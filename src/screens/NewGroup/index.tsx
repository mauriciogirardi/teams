import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { UserPlus } from "phosphor-react-native";
import { Alert } from "react-native";

import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";
import { Highlight } from "@components/Highlight";
import { AppError } from "@utils/AppError";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { isTheFieldFilled } from "@utils/isTheFieldFilled";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (isTheFieldFilled(group)) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (err) {
      if (err instanceof AppError)
        return Alert.alert("Novo Grupo", err.message);

      Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
      console.log(err);
    }
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas."
        />

        <Input placeholder="Nova turma" onChangeText={setGroup} />

        <Button
          // @ts-ignore
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
