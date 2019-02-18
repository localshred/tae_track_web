import React from 'react'
import { Link, Router } from '@reach/router'
import ContactList from 'src/pages/contact-list'
import LessonList from 'src/pages/lesson-list'
import StudentList from 'src/pages/student-list'
import Typography from '@material-ui/core/Typography'

const NotFound = props => (
  <div>
    <Typography variant='h4'>Page Not Found</Typography>
    <Typography variant='body1'>
      We don't know what to show you at {props.uri}, so you should probably{' '}
      <Link to='/students'>Go Home</Link>.
    </Typography>
  </div>
)

export default () => (
  <Router>
    <NotFound default />
    <ContactList path='/contacts' />
    <LessonList path='/lessons' />
    <StudentList path='/students' />
  </Router>
)
