import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ListPlus } from "phosphor-react-native";

import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export const Groups = () => {
  const navigation = useNavigation();
  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => navigation.navigate("newGroups");
  const handleOpenGroup = (group: string) =>
    navigation.navigate("players", { group });

  const fetchGroups = async () => {
    try {
      const storageGroups = await groupsGetAll();
      setGroups(storageGroups);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups.sort()}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={[groups?.length === 0 && { flex: 1 }]}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button
        //@ts-ignore
        icon={ListPlus}
        onPress={handleNewGroup}
        style={{ marginTop: 30 }}
      >
        Criar nova turma
      </Button>
    </Container>
  );
};
