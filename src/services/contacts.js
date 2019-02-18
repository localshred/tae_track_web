import React from 'react'
import { gql, RenderQuery } from 'src/services/graphql/components'

export const ContactsQuery = props => (
  <RenderQuery
    query={gql`
      query {
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
    `}
    {...props}
  />
)
