import MUIDataTable from 'mui-datatables'
import { StudentsQuery } from 'src/services/students'
import * as R from 'ramda'
import React from 'react'

const tableColumns = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'age', label: 'Age' },
  { name: 'rank', label: 'Rank' },
  { name: 'billingCurrentThrough', label: 'Billing Current?' },
  { name: 'testingEligibilityStartsAt', label: 'Testing Eligibility Start' }
]

const columnNames = R.map(R.prop('name'), tableColumns)

const studentRowExtractor = student => R.props(columnNames, student)

const tableOptions = {
  print: false,
  selectableRows: false,
  viewColumns: false
}

const StudentsTable = props => (
  <MUIDataTable
    columns={tableColumns}
    data={R.map(studentRowExtractor, R.pathOr([], ['data', 'students'], props))}
    options={tableOptions}
    title='Students'
  />
)

const StudentList = _props => <StudentsQuery onData={StudentsTable} />

export default StudentList
