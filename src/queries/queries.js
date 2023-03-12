import gql from "graphql-tag";

export const users = gql`
  query {
    users {
      data {
        id
        user_name
      }
    }
  }
`;
