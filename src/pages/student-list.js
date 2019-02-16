import MUIDataTable from 'mui-datatables'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import * as studentsRedux from 'src/redux/students'

const tableColumns = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' }
]

const columnNames = R.map(R.prop('name'), tableColumns)

const studentRowExtractor = student => R.props(columnNames, student)

const tableOptions = {
  print: false,
  selectableRows: false,
  viewColumns: false
}

const StudentList = props => (
  <MUIDataTable
    columns={tableColumns}
    data={R.map(studentRowExtractor, props.students)}
    options={tableOptions}
    title='Students'
  />
)

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({ firstName: PropTypes.string, lastName: PropTypes.string })
  ).isRequired
}

const mapStateToProps = R.applySpec({
  students: studentsRedux.Selectors.students
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
