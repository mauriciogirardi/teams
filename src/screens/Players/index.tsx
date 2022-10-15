import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

type RouteParamsProps = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const { group } = route.params as RouteParamsProps;

  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times."
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={[]}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button type="secondary">Remover Turma</Button>
    </Container>
  );
}
