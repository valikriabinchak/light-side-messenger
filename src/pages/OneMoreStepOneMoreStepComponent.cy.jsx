import React from 'react'
import OneMoreStepComponent from './OneMoreStep'
import { customMount } from '../../cypress/support/mount';

describe('OneMoreStepComponent', () => {
  it('renders', () => {
    customMount(<OneMoreStepComponent />);
  });
});
