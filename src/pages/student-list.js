import { distanceInWordsToNow, format, isFuture, parse } from 'date-fns'
import MUIDataTable from 'mui-datatables'
import * as R from 'ramda'
import { navigate } from '@reach/router'
import React from 'react'
import { prepareDataTable, tableOptions } from 'src/lib/datatable-helpers'
import { StudentsQuery } from 'src/services/students'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const expired = 'Expired'

const renderBillingCurrentThrough = billingCurrentThrough => {
  if (!billingCurrentThrough) {
    return expired
  }
  const parsedDate = parse(billingCurrentThrough)
  const formattedDate = format(parsedDate, 'YYYY-MM-DD')
  const isCurrent = isFuture(parsedDate)

  if (!isCurrent) {
    return (
      <Tooltip title={`Billing expired on ${formattedDate}`}>
        <Typography variant='body1'>Expired</Typography>
      </Tooltip>
    )
  }

  return (
    <Tooltip title={`Billing expires on ${formattedDate}`}>
      <Typography variant='body1'>
        ~{distanceInWordsToNow(parsedDate)}
      </Typography>
    </Tooltip>
  )
}

const renderTestingEligibilityStartsAt = testingEligibilityStartsAt =>
  R.unless(R.isNil, value => format(parse(value), 'YYYY-MM-DD'))(
    testingEligibilityStartsAt
  )

const selector = ['data', 'students']
const { renderRows, tableColumns } = prepareDataTable(selector, [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'age', label: 'Age' },
  { name: 'rank', label: 'Rank' },
  {
    name: 'billingCurrentThrough',
    label: 'Next Billing Date',
    options: { customBodyRender: renderBillingCurrentThrough }
  },
  {
    name: 'testingEligibilityStartsAt',
    label: 'Testing Eligibility Start',
    options: {
      customBodyRender: renderTestingEligibilityStartsAt
    }
  }
])

const onRowClick = R.curry((props, _rowData, { rowIndex: index }) => {
  const id = R.pipe(
    R.pathOr([], ['data', 'students']),
    R.nth(index),
    R.propOr(null, 'id')
  )(props)

  if (id) {
    navigate(`/students/${id}`)
  }
})

const StudentsTable = props => (
  <MUIDataTable
    columns={tableColumns}
    data={renderRows(props)}
    options={R.merge(tableOptions, { onRowClick: onRowClick(props) })}
    title='Students'
  />
)

const StudentList = _props => <StudentsQuery onData={StudentsTable} />

export default StudentList
