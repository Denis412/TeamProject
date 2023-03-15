import gql from "graphql-tag";

export const products = gql`
  query {
    products {
      id
      user_id
      title
      image
      description
    }
  }
`;
