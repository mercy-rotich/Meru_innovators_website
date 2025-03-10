import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const storedTheme = sessionStorage.getItem("isDarkMode") === "true";

  const [isDarkMode, setIsDarkMode] = useState(storedTheme);

  useEffect(() => {

    sessionStorage.setItem("isDarkMode", isDarkMode);

  }, [isDarkMode]);


  const toggleTheme = () => {

    setIsDarkMode((prevMode) => !prevMode);
    
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
