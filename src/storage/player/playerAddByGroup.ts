import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./dtos/PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { playersGetAllGroup } from "./playersGetAllGroup";

interface PlayerProps {
  newPlayer: PlayerStorageDTO;
  group: string;
}

export async function playerAddByGroup({ group, newPlayer }: PlayerProps) {
  try {
    const players = await playersGetAllGroup(group);
    const playerAlreadyExists = players.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0)
      throw new AppError("Essa pessoa já está adicionada em um time aqui.");

    const storage = JSON.stringify([...players, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (err) {
    console.error(err);
    throw err;
  }
}
