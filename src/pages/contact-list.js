import MUIDataTable from 'mui-datatables'
import { ContactsQuery } from 'src/services/contacts'
import * as R from 'ramda'
import React from 'react'

const tableColumns = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'phone', label: 'Phone' },
  { name: 'insertedAt', label: 'Inserted At' },
  { name: 'updatedAt', label: 'Updated At' }
]

const columnNames = R.map(R.prop('name'), tableColumns)

const contactRowExtractor = contact => R.props(columnNames, contact)

const tableOptions = {
  print: false,
  selectableRows: false,
  viewColumns: false
}

const ContactsTable = props => (
  <MUIDataTable
    columns={tableColumns}
    data={R.map(contactRowExtractor, R.pathOr([], ['data', 'contacts'], props))}
    options={tableOptions}
    title='Contacts'
  />
)

const ContactList = _props => <ContactsQuery onData={ContactsTable} />

export default ContactList
