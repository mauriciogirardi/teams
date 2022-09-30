import { themes } from "@theme/index";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Themes } from "src/@types/styled";
import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components/native";

type ThemeProps = "DARK" | "LIGHT";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextData = {
  theme: ThemeProps;
  toggle: boolean;
  handleToggle: () => void;
};

type ColorsProps = typeof themes.COLORS.DARK;

const INITIAL_STATE_THEME = {
  COLORS: themes.COLORS.DARK,
  FONT_FAMILY: themes.FONT_FAMILY,
  FONT_SIZE: themes.FONT_SIZE,
};

const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeProps>("DARK");
  const [toggle, setToggle] = useState(true);
  const [currencyTheme, setCurrencyTheme] =
    useState<Themes>(INITIAL_STATE_THEME);

  useEffect(() => {
    setCurrencyTheme({
      ...themes,
      COLORS: themes.COLORS[theme] as ColorsProps,
    });
  }, [theme]);

  const handleToggle = useCallback(() => {
    setToggle((prevState) => !prevState);
    setTheme(toggle ? "LIGHT" : "DARK");
  }, [toggle]);

  return (
    <ThemeContext.Provider value={{ theme, toggle, handleToggle }}>
      <ThemeProviderStyledComponents theme={currencyTheme}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
