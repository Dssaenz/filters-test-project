import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import { lightTheme, darkTheme } from './main';

import { ButtonTheme } from '../components';
import useDarkMode from '../hooks/useDarkMode';

function AppTheme({ children }) {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
      <ButtonTheme theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default AppTheme;
