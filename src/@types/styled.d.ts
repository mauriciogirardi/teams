import "styled-components";
import { themes } from "@theme/index";

type DarkTheme = typeof themes;

declare module "styled-components" {
  export interface DefaultTheme extends DarkTheme {}
}
