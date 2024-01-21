import { createContext } from 'react';
export const ThemeContext = createContext({
  theme: '',
  handleThemeChange: (theme: string): void => {console.log(theme)},
});