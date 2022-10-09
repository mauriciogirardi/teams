import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { StatusBar } from "react-native";
import { Providers } from "@context/index";
import { Players } from "@screens/Players";
import { Loading } from "@components/common/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <Providers>
      <StatusBar
        //backgroundColor="transparent"
        //barStyle="light-content"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </Providers>
  );
}
