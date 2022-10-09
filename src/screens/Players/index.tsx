import { useState } from "react";
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

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times."
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B", "Time C", "Time D"]}
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

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
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
