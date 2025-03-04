import React, { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { useTheme } from "./context/ThemeContext";

import AppRoutes from "./routes";

const App = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.remove("bg-primary-one");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
