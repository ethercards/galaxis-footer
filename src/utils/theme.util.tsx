import { PaletteOptions, Theme, ThemeOptions, createTheme } from "@mui/material";
import { customBreakpoints } from "./breakpoints.util";
import { customVariant } from "./typography.util";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
    whiteByMode: Palette["primary"];
    blackByMode: Palette["primary"];
    gray: Palette["primary"];
    darkPurple: Palette["primary"];
  }
  interface PaletteOptions {
    white: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
    whiteByMode: PaletteOptions["primary"];
    blackByMode: PaletteOptions["primary"];
    gray: PaletteOptions["primary"];
    darkPurple: PaletteOptions["primary"];
  }
}

const generalThemeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: "rgb(254, 44, 133)",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
    whiteByMode: {
      main: "#ffffff",
    },
    blackByMode: {
      main: "#000000",
    },
    gray: {
      main: "#b5b5be",
    },
    darkPurple: {
      main: "#06061A",
    },
  },
  typography: customVariant,
  breakpoints: {
    values: customBreakpoints,
  },
};

const lightTheme = createTheme({
  ...generalThemeConfig,
});

const darkTheme = createTheme({
  ...generalThemeConfig,
  palette: {
    ...generalThemeConfig.palette,
    mode: "dark",
    whiteByMode: {
      main: "#000000",
    },
    blackByMode: {
      main: "#ffffff",
    },
  } as PaletteOptions,
});

const getActiveTheme = (themeMode: "light" | "dark" = "dark"): Theme => {
  return themeMode === "light" ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getActiveTheme };
