import * as R from 'ramda'

export const boolToString = bool => (bool ? 'Yes' : 'No')

export const tableOptions = {
  print: false,
  selectableRows: false,
  viewColumns: false
}

export const prepareDataTable = (pathSelector, tableColumns) => {
  const columnNames = R.map(R.prop('name'), tableColumns)
  const rowExtractor = row => R.props(columnNames, row)
  const renderRows = R.pipe(R.pathOr([], pathSelector), R.map(rowExtractor))
  return { renderRows, tableColumns }
}
