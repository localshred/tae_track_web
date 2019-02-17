import { gql, renderQuery } from 'src/services/graphql/components'

export const StudentsQuery = renderQuery(gql`
  {
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
`)
