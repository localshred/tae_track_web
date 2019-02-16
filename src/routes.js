import React from 'react'
import { Router } from '@reach/router'
import StudentList from 'src/pages/student-list'

export default () => (
  <Router>
    <StudentList path='/' />
  </Router>
)
