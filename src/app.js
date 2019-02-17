import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { store } from 'src/redux'
import Layout from 'src/pages/layouts/layout'
import theme from 'src/theme'
import { client } from 'src/services/graphql/client'

export default () => (
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Layout />
      </MuiThemeProvider>
    </ApolloProvider>
  </ReduxProvider>
)
