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

export const renderQuery = query => props => (
  <Query query={query}>{renderQueryProp(props)}</Query>
)
