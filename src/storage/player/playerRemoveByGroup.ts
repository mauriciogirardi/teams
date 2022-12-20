import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { playersGetAllGroup } from "./playersGetAllGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetAllGroup(group);
    const filtered = storage.filter((player) => player.name !== playerName);
    const players = JSON.stringify(filtered);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (err) {
    console.error(err);
    throw err;
  }
}
