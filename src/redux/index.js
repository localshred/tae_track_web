import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

const reducer = combineReducers({})

const initialState = {}

const middleware = [logger]

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
)
