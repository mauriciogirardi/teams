import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GROUPS, NEW_GROUPS, PLAYERS } from "../constants/paths";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
import { Groups } from "@screens/Groups";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={GROUPS} component={Groups} />
      <Screen name={NEW_GROUPS} component={NewGroup} />
      <Screen name={PLAYERS} component={Players} />
    </Navigator>
  );
}
