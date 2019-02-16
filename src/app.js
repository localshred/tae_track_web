import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { store } from 'src/redux'
import Routes from 'src/routes'
import theme from 'src/theme'

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
)
