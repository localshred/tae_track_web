import MUIDataTable from 'mui-datatables'
import React from 'react'
import { prepareDataTable, tableOptions } from 'src/lib/datatable-helpers'
import { ContactsQuery } from 'src/services/contacts'

const { renderRows, tableColumns } = prepareDataTable(
  ['data', 'contacts'],
  [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone' },
    { name: 'insertedAt', label: 'Inserted At' },
    { name: 'updatedAt', label: 'Updated At' }
  ]
)

const ContactsTable = props => (
  <MUIDataTable
    columns={tableColumns}
    data={renderRows(props)}
    options={tableOptions}
    title='Contacts'
  />
)

const ContactList = _props => <ContactsQuery onData={ContactsTable} />

export default ContactList
