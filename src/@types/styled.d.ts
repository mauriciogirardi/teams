import "styled-components";
import { themes } from "@theme/index";

export type Themes = {
  COLORS: typeof themes.COLORS.DARK;
  FONT_FAMILY: typeof themes.FONT_FAMILY;
  FONT_SIZE: typeof themes.FONT_SIZE;
};

declare module "styled-components" {
  export interface DefaultTheme extends Themes {}
}
