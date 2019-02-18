import React from 'react'
import { Link, Router } from '@reach/router'
import ContactsList from 'src/pages/contacts/list'
import LessonsList from 'src/pages/lessons/list'
import StudentsList from 'src/pages/students/list'
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
    <ContactsList path='/contacts' />
    <LessonsList path='/lessons' />
    <StudentsList path='/students' />
  </Router>
)
