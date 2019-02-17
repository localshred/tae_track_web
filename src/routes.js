import React from 'react'
import { Router } from '@reach/router'
import ContactList from 'src/pages/contact-list'
import StudentList from 'src/pages/student-list'

export default () => (
  <Router>
    <ContactList path='/contacts' />
    <StudentList path='/students' />
  </Router>
)
