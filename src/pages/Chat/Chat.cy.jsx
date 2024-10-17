import React from 'react'
import Chat from './Chat'
import { customMount } from '../../../cypress/support/mount';

describe('<Chat />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    customMount(<Chat />)
  })
})