import "styled-components";
import { dark } from "@theme/colors/dark";

type DarkTheme = typeof dark;

declare module "styled-components" {
  export interface DefaultTheme extends DarkTheme {}
}
