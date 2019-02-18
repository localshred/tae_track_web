import React from 'react'
import { StudentQuery } from 'src/services/students'
import { boolToString } from 'src/lib/datatable-helpers'
import Typography from '@material-ui/core/Typography'

const ShowStudent = props => (
  <div>
    <div>
      <Typography variant='body1'>
        {props.data.student.firstName} {props.data.student.lastName}
      </Typography>
    </div>
    <div>
      <Typography variant='body1'>{props.data.student.rank}</Typography>
    </div>
    <div>
      <Typography variant='body1'>
        {boolToString(props.data.student.isActive)}
      </Typography>
    </div>
    <div>
      <Typography variant='body1'>{props.data.student.firstName}</Typography>
    </div>
  </div>
)

export default props => <StudentQuery id={props.id} onData={ShowStudent} />
