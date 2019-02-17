import React from 'react'
import { Router } from '@reach/router'
import ContactList from 'src/pages/contact-list'
import LessonList from 'src/pages/lesson-list'
import StudentList from 'src/pages/student-list'

export default () => (
  <Router>
    <ContactList path='/contacts' />
    <LessonList path='/lessons' />
    <StudentList path='/students' />
  </Router>
)
