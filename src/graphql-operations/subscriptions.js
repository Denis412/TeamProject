import gql from "graphql-tag";

export const getProductsInFavorites = gql`
  query getProductsInFavorites {
    favorites {
      products
    }
  }
`;
