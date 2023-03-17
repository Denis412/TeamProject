import gql from "graphql-tag";

export const addProductToFavorites = gql`
  mutation addProductToFavorites($user_id: String!, $product: json) {
    insert_favorites_one(object: { user_id: $user_id, products: $product }) {
      id
      products
    }
  }
`;
