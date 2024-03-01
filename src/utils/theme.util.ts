import {
  PaletteOptions,
  Theme,
  ThemeOptions,
  createTheme,
} from '@mui/material';
import { customVariant } from './typography.util';
import { customBreakpoints } from './breakpoints.util';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
    whiteByMode: Palette['primary'];
    blackByMode: Palette['primary'];
    gray: Palette['primary'];
    darkGray: Palette['primary'];
    darkPurple: Palette['primary'];
    blue: Palette['primary'];
    green: Palette['primary'];
    brown: Palette['primary'];
    purple: Palette['primary'];
    snackbarSuccess: Palette['primary'];
    snackbarError: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    whiteByMode: PaletteOptions['primary'];
    blackByMode: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    darkGray: PaletteOptions['primary'];
    darkPurple: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    brown: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    snackbarSuccess: PaletteOptions['primary'];
    snackbarError: PaletteOptions['primary'];
  }
}

const generalThemeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: 'rgb(254, 44, 133)',
    },
    white: {
      main: '#ffffff',
    },
    black: {
      main: '#000000',
    },
    whiteByMode: {
      main: '#ffffff',
    },
    blackByMode: {
      main: '#000000',
    },
    gray: {
      main: '#b5b5be',
    },
    darkGray: {
      main: '#151E2A',
    },
    darkPurple: {
      main: '#06061A',
    },
    blue: {
      main: '#3B79D7',
    },
    green: {
      main: '#09A496',
    },
    brown: {
      main: '#A8614C',
    },
    purple: {
      main: '#6F4e9F',
    },
    background: {
      default: '#FAF9F5',
    },
    snackbarSuccess: {
      main: '#27d0b2',
    },
    snackbarError: {
      main: '#c52965',
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
    mode: 'dark',
    whiteByMode: {
      main: '#000000',
    },
    blackByMode: {
      main: '#ffffff',
    },
    background: {
      default: '#080826',
    },
    mobileMenuBackground: {
      default: 'rgba(8,22,38,0.67)',
    },
  } as PaletteOptions,
});

const getActiveTheme = (themeMode: 'light' | 'dark' = 'dark'): Theme => {
  return themeMode === 'light' ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getActiveTheme };
