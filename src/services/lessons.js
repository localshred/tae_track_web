import { gql, renderQuery } from 'src/services/graphql/components'

export const LessonsQuery = renderQuery(gql`
  {
    lessons {
      id
      lessonAt
      insertedAt
      updatedAt
    }
  }
`)
