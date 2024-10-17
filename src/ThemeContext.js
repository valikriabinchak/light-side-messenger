import React, { createContext, useState } from 'react';

export const ThemeContext = createContext('darkTheme');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'darkTheme');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};