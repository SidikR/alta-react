import { gql } from "graphql-request";

export const Q_CHARACTERS = gql`
  query Q_CHARACTERS {
    characters {
      results {
        name
        id
        gender
        location {
          name
        }
      }
    }
  }
`