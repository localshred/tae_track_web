import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/redux'
import Routes from 'src/routes'

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
