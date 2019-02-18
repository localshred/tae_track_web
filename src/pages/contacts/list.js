import MUIDataTable from 'mui-datatables'
import React from 'react'
import { prepareDataTable, tableOptions } from 'src/lib/datatable-helpers'
import { ContactsQuery } from 'src/services/contacts'

const { renderRows, tableColumns } = prepareDataTable(
  ['data', 'contacts'],
  [
    { name: 'name', label: 'Name' },
    {
      name: 'email',
      label: 'Email',
      options: {
        customBodyRender: email => <a href={`mailto:${email}`}>{email}</a>
      }
    },
    {
      name: 'phone',
      label: 'Phone',
      options: {
        customBodyRender: phone => <a href={`tel:${phone}`}>{phone}</a>
      }
    },
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

const ContactsList = _props => <ContactsQuery onData={ContactsTable} />

export default ContactsList
