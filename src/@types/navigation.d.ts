import { GROUPS, NEW_GROUPS, PLAYERS } from "../constants/paths";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [GROUPS]: undefined;
      [PLAYERS]: {
        group: string;
      };
      [NEW_GROUPS]: undefined;
    }
  }
}
