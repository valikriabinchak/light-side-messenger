import React from 'react'
import AuthComponent from './Auth'
import { customMount } from '../../cypress/support/mount';

describe('<AuthComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    customMount(<AuthComponent />)
  })
})