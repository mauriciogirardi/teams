import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await groupsGetAll();
    const groupAlreadyExists = groups.includes(newGroup);

    if (groupAlreadyExists)
      throw new AppError("Já existe um group cadastrado com esse nome.");

    const storage = JSON.stringify([...groups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (err) {
    console.error(err);
    throw err;
  }
}
