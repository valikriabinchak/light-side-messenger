import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'cypress/react';
import { ThemeProvider } from '../../src/ThemeContext';

const customMount = (component) => {
  return mount(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>{component}</BrowserRouter>
      </ThemeProvider>
   </React.StrictMode>
  );
};

export { customMount };
