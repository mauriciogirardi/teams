import { useState } from "react";
import { FlatList } from "react-native";
import { ListPlus } from "phosphor-react-native";

import { Highlight } from "@components/common/Highlight";
import { ListEmpty } from "@components/common/ListEmpty";
import { GroupCard } from "@components/cards/GroupCard";
import { Container } from "./styles";
import { Header } from "@components/common/Header";

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
