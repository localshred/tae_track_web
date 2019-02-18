import React from 'react'
import { gql, RenderQuery } from 'src/services/graphql/components'

export const LessonsQuery = props => (
  <RenderQuery
    query={gql`
      query {
        lessons {
          id
          lessonAt
          insertedAt
          updatedAt
        }
      }
    `}
    {...props}
  />
)
