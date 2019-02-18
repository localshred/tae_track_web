import React from 'react'
import { gql, RenderQuery } from 'src/services/graphql/components'

export const StudentsQuery = props => (
  <RenderQuery
    query={gql`
      query {
        students {
          id
          firstName
          lastName
          isActive
          billingCurrentThrough
          testingEligibilityStartsAt
          age
          rank
        }
      }
    `}
    {...props}
  />
)
