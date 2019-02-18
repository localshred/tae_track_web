import React from 'react'
import { gql, RenderQuery } from 'src/services/graphql/components'

export const StudentQuery = props => (
  <RenderQuery
    query={gql`
      query Student($id: ID!) {
        student(query: { id: $id }) {
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
    variables={{ id: props.id }}
    {...props}
  />
)

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
