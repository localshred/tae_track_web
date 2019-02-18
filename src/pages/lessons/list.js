import MUIDataTable from 'mui-datatables'
import React from 'react'
import { format, parse } from 'date-fns'
import { LessonsQuery } from 'src/services/lessons'
import { prepareDataTable, tableOptions } from 'src/lib/datatable-helpers'

const { renderRows, tableColumns } = prepareDataTable(
  ['data', 'lessons'],
  [
    {
      name: 'lessonAt',
      label: 'Lesson Date',
      options: {
        customBodyRender: lessonAt => format(parse(lessonAt), 'YYYY-MM-DD')
      }
    },
    { name: 'insertedAt', label: 'Inserted At' },
    { name: 'updatedAt', label: 'Updated At' }
  ]
)

const LessonsTable = props => (
  <MUIDataTable
    columns={tableColumns}
    data={renderRows(props)}
    options={tableOptions}
    title='Lessons'
  />
)

const LessonsList = _props => <LessonsQuery onData={LessonsTable} />

export default LessonsList
