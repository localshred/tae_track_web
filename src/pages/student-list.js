import { format, isFuture, parse } from 'date-fns'
import MUIDataTable from 'mui-datatables'
import * as R from 'ramda'
import React from 'react'
import {
  prepareDataTable,
  tableOptions,
  boolToString
} from 'src/lib/datatable-helpers'
import { StudentsQuery } from 'src/services/students'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const renderBillingCurrentThrough = billingCurrentThrough => {
  if (!billingCurrentThrough) {
    return boolToString(false)
  }
  const parsedDate = parse(billingCurrentThrough)
  const isCurrent = isFuture(parsedDate)
  const formattedDate = format(parsedDate, 'YYYY-MM-DD')
  return (
    <Tooltip title={`Billing expires on ${formattedDate}`}>
      <Typography body1>{boolToString(isCurrent)}</Typography>
    </Tooltip>
  )
}

const renderTestingEligibilityStartsAt = testingEligibilityStartsAt =>
  R.unless(R.isNil, value => format(parse(value), 'YYYY-MM-DD'))(
    testingEligibilityStartsAt
  )

const { renderRows, tableColumns } = prepareDataTable(
  ['data', 'students'],
  [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'age', label: 'Age' },
    { name: 'rank', label: 'Rank' },
    {
      name: 'billingCurrentThrough',
      label: 'Billing Current?',
      options: { customBodyRender: renderBillingCurrentThrough }
    },
    {
      name: 'testingEligibilityStartsAt',
      label: 'Testing Eligibility Start',
      options: {
        customBodyRender: renderTestingEligibilityStartsAt
      }
    }
  ]
)

const StudentsTable = props => (
  <MUIDataTable
    columns={tableColumns}
    data={renderRows(props)}
    options={tableOptions}
    title='Students'
  />
)

const StudentList = _props => <StudentsQuery onData={StudentsTable} />

export default StudentList
