import { useState } from "react";
import { FlatList } from "react-native";
import { ListPlus } from "phosphor-react-native";

import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      {/*@ts-ignore*/}
      <Button icon={ListPlus}>Criar nova turma</Button>
    </Container>
  );
};
