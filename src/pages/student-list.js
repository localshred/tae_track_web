import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { Creators, stateKey } from '../redux/students'

const StudentRow = student => (
  <li key={student.firstName}>
    {student.firstName} {student.lastName}
  </li>
)

class StudentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleUpdate = key => event => this.setState({ [key]: event.target.value })

  onSubmit = event => {
    this.props.addStudent(this.state.firstName, this.state.lastName)
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render () {
    return (
      <div>
        <h2>Students</h2>
        <div>
          <input
            value={this.state.firstName}
            onChange={this.handleUpdate('firstName')}
          />
          <input
            value={this.state.lastName}
            onChange={this.handleUpdate('lastName')}
          />
          <button onClick={this.onSubmit} type='button'>
            Submit
          </button>
        </div>
        <ul>
          {R.pipe(
            R.propOr([], 'students'),
            R.map(StudentRow)
          )(this.props)}
        </ul>
      </div>
    )
  }
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({ firstName: PropTypes.string, lastName: PropTypes.string })
  ).isRequired,
  addStudent: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  console.log({ state })
  return { students: state[stateKey].records }
}

const mapDispatchToProps = dispatch => ({
  addStudent: (firstName, lastName) =>
    dispatch(Creators.addStudent(firstName, lastName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList)
