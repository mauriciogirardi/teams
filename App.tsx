import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Groups } from "@screens/Groups";
import { themes } from "@theme/index";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
