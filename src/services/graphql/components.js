import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import { Query } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
export { default as gql } from 'graphql-tag'

export const renderData = R.curry(
  (RenderData, { data }) =>
    RenderData ? (
      <RenderData data={data} />
    ) : (
      <div>
        <Snackbar open message="You didn't provide an onData component" />
        <div>{JSON.stringify(data)}</div>
      </div>
    )
)

export const renderError = R.curry(
  (RenderError, { error }) =>
    RenderError ? (
      <RenderError error={error} />
    ) : (
      <Snackbar open message={error.message} />
    )
)

export const renderLoader = R.curry(
  (RenderLoader, _props) =>
    RenderLoader ? <RenderLoader /> : <CircularProgress />
)

export const renderQueryProp = ({ onData, onError, onLoading }) =>
  R.cond([
    [R.propEq('loading', true), renderLoader(onLoading)],
    [R.propSatisfies(R.complement(R.isNil), 'error'), renderError(onError)],
    [R.T, renderData(onData)]
  ])

export const RenderQuery = props => (
  <Query query={props.query} variables={R.propOr({}, 'variables', props)}>
    {renderQueryProp(props)}
  </Query>
)

RenderQuery.propTypes = {
  onData: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  onError: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  query: PropTypes.string.isRequired,
  variables: PropTypes.object.isRequired
}
