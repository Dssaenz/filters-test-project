import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';

const LOCAL_STORAGE_KEY = {
  THEME: 'theme',
};

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = mode => {
    setLocalStorage(LOCAL_STORAGE_KEY.THEME, mode);
    setTheme(mode);
  };

  const toggleTheme = () =>
    theme === 'light' ? setMode('dark') : setMode('light');

  useEffect(() => {
    const localTheme = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEY.THEME));

    if (localTheme) setTheme(localTheme);
  }, []);

  return { theme, toggleTheme };
};

export default useDarkMode;
