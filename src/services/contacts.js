import { gql, renderQuery } from 'src/services/graphql/components'

export const ContactsQuery = renderQuery(gql`
  {
    contacts {
      id
      name
      phone
      email
      isActive
      insertedAt
      updatedAt
    }
  }
`)
