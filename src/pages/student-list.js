import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { connect } from 'react-redux'
import * as studentsRedux from '../redux/students'
import MUIDataTable from 'mui-datatables'

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
  <div>
    <MUIDataTable
      title='Students'
      data={R.map(studentRowExtractor, props.students)}
      columns={tableColumns}
      options={tableOptions}
    />
  </div>
)

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({ firstName: PropTypes.string, lastName: PropTypes.string })
  ).isRequired,
  addStudent: PropTypes.func.isRequired
}

const mapStateToProps = R.applySpec({
  students: studentsRedux.Selectors.students
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
