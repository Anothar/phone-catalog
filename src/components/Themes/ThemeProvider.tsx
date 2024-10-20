import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme1, theme2, theme3, theme4, theme5 } from './themes';

export type ThemeNames = 'White' | 'Dark' | 'Theme3' | 'Theme4' | 'Theme5';

export const themeMap = {
  White: theme1,
  Dark: theme2,
  Theme3: theme3,
  Theme4: theme4,
  Theme5: theme5,
};

const defaultThemeName = 'White';

const ThemeContext = createContext({
  theme: themeMap[defaultThemeName],
  setTheme: (_name: ThemeNames) => {},
});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const storedThemeName = localStorage.getItem('themeName') as ThemeNames;
  const [themeName, setThemeName] = useState<ThemeNames>(
    storedThemeName || defaultThemeName,
  );

  const setTheme = (name: ThemeNames) => {
    setThemeName(name);
    localStorage.setItem('themeName', name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeMap[themeName], setTheme }}>
      <StyledThemeProvider theme={themeMap[themeName]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
