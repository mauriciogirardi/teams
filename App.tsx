import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import { dark } from "@theme/colors/dark";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <Groups />
    </ThemeProvider>
  );
}
