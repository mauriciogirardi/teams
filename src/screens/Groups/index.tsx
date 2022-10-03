import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import * as S from "./styles";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <S.ContainerGroup>
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
    </S.ContainerGroup>
  );
};
