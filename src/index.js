import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';

import { mount } from 'cypress/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </React.StrictMode>
);

reportWebVitals();

Cypress.Commands.add('mount', (component) => {
  return mount(<BrowserRouter>{component}</BrowserRouter>);
});