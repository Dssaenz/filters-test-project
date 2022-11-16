import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import { lightTheme, darkTheme } from './main';

import useDarkMode from '../hooks/useDarkMode';

function AppTheme({ children }) {
  const { theme } = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
