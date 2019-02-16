import React, { Component } from 'react'
import { Router } from '@reach/router'
import StudentList from 'src/pages/student-list'
import { Provider } from 'react-redux'
import { store } from 'src/redux'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <StudentList path='/' />
        </Router>
      </Provider>
    )
  }
}

export default App
