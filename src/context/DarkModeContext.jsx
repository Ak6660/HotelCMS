import {
  createContext,
  useContext,
  useEffect,
} from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)')
      .matches,
    'isDarkMode'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove(
        'light-mode'
      );
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove(
        'dark-mode'
      );
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}
