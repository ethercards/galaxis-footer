import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { darkTheme, getActiveTheme } from '../utils/theme.util';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import React from 'react';

interface ThemeContextType {
  activeTheme: Theme | null;
  setActiveTheme: Dispatch<SetStateAction<Theme | null>>;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

type Props = {
  children: ReactNode;
};

export const CustomThemeProvider: FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const storageTheme = localStorage.getItem('activeTheme');
    const isSavedTheme =
      storageTheme !== null &&
      (storageTheme === 'light' || storageTheme === 'dark');
    setActiveTheme(isSavedTheme ? getActiveTheme(storageTheme) : darkTheme);
  }, []);

  useEffect(() => {
    if (activeTheme) {
      localStorage.setItem('activeTheme', activeTheme.palette.mode);
    }
  }, [activeTheme]);

  const themeContextValue: ThemeContextType = {
    activeTheme,
    setActiveTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {activeTheme && (
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      )}
    </ThemeContext.Provider>
  );
};
