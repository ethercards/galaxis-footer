import {
  PaletteOptions,
  Theme,
  ThemeOptions,
  createTheme,
} from '@mui/material';
import { customBreakpoints } from './breakpoints.util';
import { customVariant } from './typography.util';
// import Poppins from '../fonts/poppins/Poppins.ttf';
// import PoppinsMedium from '../fonts/poppins/Poppins-Medium.ttf';
// import PoppinsSemiBold from '../fonts/poppins/Poppins-SemiBold.ttf';
// import BauRegular from '../fonts/bau/Bau-Regular.ttf';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
    whiteByMode: Palette['primary'];
    blackByMode: Palette['primary'];
    gray: Palette['primary'];
    darkPurple: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    whiteByMode: PaletteOptions['primary'];
    blackByMode: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    darkPurple: PaletteOptions['primary'];
  }
}

const poppins = {
  fontFamily: 'Poppins',
  //   src: `url(${Poppins})`,
  format: "('ttf')",
  fontDisplay: 'swap',
};

const poppinsMedium = {
  fontFamily: 'PoppinsMedium',
  //   src: `url(${PoppinsMedium})`,
  format: "('ttf')",
  fontDisplay: 'swap',
};

const poppinsSemiBold = {
  fontFamily: 'PoppinsSemiBold',
  //   src: `url(${PoppinsSemiBold})`,
  format: "('ttf')",
  fontDisplay: 'swap',
};

const bauRegular = {
  fontFamily: 'BauRegular',
  //   src: `url(${BauRegular})`,
  format: "('ttf')",
  fontDisplay: 'swap',
};

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
    darkPurple: {
      main: '#06061A',
    },
  },
  typography: customVariant,
  breakpoints: {
    values: customBreakpoints,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [
          { '@font-face': poppins },
          { '@font-face': poppinsMedium },
          { '@font-face': poppinsSemiBold },
          { '@font-face': bauRegular },
        ],
      },
    },
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
  } as PaletteOptions,
});

const getActiveTheme = (themeMode: 'light' | 'dark' = 'dark'): Theme => {
  return themeMode === 'light' ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getActiveTheme };
