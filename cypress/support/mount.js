import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'cypress/react';

const customMount = (component) => {
  return mount(<BrowserRouter>{component}</BrowserRouter>);
};

export { customMount };
