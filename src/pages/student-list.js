import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { connect } from 'react-redux'
import * as studentsRedux from '../redux/students'

const StudentRow = student => (
  <li key={student.firstName}>
    {student.firstName} {student.lastName}
  </li>
)

const StudentList = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = event => {
    props.addStudent(firstName, lastName)
    setFirstName(firstName)
    setLastName(lastName)
  }

  return (
    <div>
      <h2>Students</h2>
      <div>
        <div>
          <input
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <input
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </div>
        <div>
          <button onClick={onSubmit} type='button'>
            Submit
          </button>
        </div>
      </div>
      <ul>{R.pipe(R.propOr([], 'students'), R.map(StudentRow))(props)}</ul>
    </div>
  )
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({ firstName: PropTypes.string, lastName: PropTypes.string })
  ).isRequired,
  addStudent: PropTypes.func.isRequired
}

const mapStateToProps = R.applySpec({
  students: studentsRedux.Selectors.students
})

const mapDispatchToProps = dispatch => ({
  addStudent: R.pipe(studentsRedux.Creators.addStudent, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
