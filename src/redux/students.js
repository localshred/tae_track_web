import { createActions, createReducer } from 'reduxsauce'
import * as R from 'ramda'

const stateKey = 'students'

const initialState = { records: [{ firstName: 'BJ', lastName: 'Neilsen' }] }

const { Types, Creators } = createActions({
  addStudent: ['firstName', 'lastName'],
  fetchStudents: []
})

const Selectors = {
  students: R.path([stateKey, 'records'])
}

const addStudent = (state, { firstName, lastName }) => {
  const newRecords = state.records.concat([{ firstName, lastName }])
  return R.assoc('records', newRecords, state)
}

const fetchStudents = state => state

const reducers = createReducer(initialState, {
  [Types.ADD_STUDENT]: addStudent,
  [Types.FETCH_STUDENTS]: fetchStudents
})

export { Creators, reducers, Selectors, stateKey, Types }
