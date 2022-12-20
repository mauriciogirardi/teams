import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { isTheFieldFilled } from "@utils/isTheFieldFilled";
import { PlayerStorageDTO } from "@storage/player/dtos/PlayerStorageDTO";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { AppError } from "@utils/AppError";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParamsProps = {
  group: string;
};

export function Players() {
  const navigation = useNavigation();
  const newPlayerNameInputRef = useRef<TextInput>(null);
  const route = useRoute();
  const { group } = route.params as RouteParamsProps;

  const [team, setTeam] = useState(group);
  const [groups, setGroups] = useState<string[]>([]);
  const [namePlayer, setNamePlayer] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const handleAddPlayer = async () => {
    try {
      if (isTheFieldFilled(namePlayer)) {
        return Alert.alert(
          "Nova pessoa",
          "Informe o nome da pessoa para adicionar."
        );
      }

      const newPlayer: PlayerStorageDTO = {
        name: namePlayer,
        team,
      };

      await playerAddByGroup({ newPlayer, group });
      newPlayerNameInputRef.current?.blur();
      fetchPlayersByTeam();
      setNamePlayer("");
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Nova pessoa", err.message);
      }

      Alert.alert("Novo Pessoa", "Não foi possível adicionar uma nova pessoa.");
      console.log(err);
    }
  };

  const handleRemoveNamePlayer = async (name: string) => {
    try {
      await playerRemoveByGroup(name, group);
      fetchPlayersByTeam();
    } catch (err) {
      console.error(err);
      Alert.alert(
        "Remover pessoa",
        `Não foi possível remover está pessoa: "${name}".`
      );
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (err) {
      console.error(err);
      Alert.alert("Listar Pessoas", "Não foi possível listar as pessoas.");
    }
  };

  const fetchAllGroups = async () => {
    try {
      const allGroups = await groupsGetAll();
      setGroups(allGroups);
    } catch (err) {
      console.error(err);
      Alert.alert("Listar Times", "Não foi possível carregar os times.");
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (err) {
      console.error(err);
      Alert.alert(
        "Remover Group",
        `Não foi possível remover o group ${group}.`
      );
    }
  };

  const handleGroupRemove = async () => {
    Alert.alert("Remover", "Deseja remover o group?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ]);
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  useEffect(() => {
    fetchAllGroups();
  }, []);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={team} subtitle="adicione a galera e separe os times." />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNamePlayer}
          value={namePlayer}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {players.length > 0 && (
          <NumberOfPlayers>{players.length}</NumberOfPlayers>
        )}
      </HeaderList>

      <FlatList
        data={players}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemoveNamePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        type="secondary"
        style={{ marginTop: 30 }}
        onPress={handleGroupRemove}
      >
        Remover Turma
      </Button>
    </Container>
  );
}
