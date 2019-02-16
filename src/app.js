import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { store } from 'src/redux'
import theme from 'src/theme'
import Layout from 'src/pages/layouts/layout'

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  </Provider>
)
