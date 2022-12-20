import { playersGetAllGroup } from "./playersGetAllGroup";

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetAllGroup(group);
    const players = storage.filter((player) => player.team === team);
    return players;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
