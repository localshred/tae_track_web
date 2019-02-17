import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  request: async operation => {
    operation.setContext({
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  },
  uri: process.env.REACT_APP_API_HOST
})
