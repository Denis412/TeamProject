import gql from "graphql-tag";

// title, description, user_id, price, quantity, category, image, old_price

export const addProductToFavorites = gql`
  mutation addProductToFavorites($user_id: String!, $product: json) {
    insert_favorites_one(object: { user_id: $user_id, products: $product }) {
      id
      products
    }
  }
`;

export const addProductToCatalog = gql`
  mutation addProductToCatalog(
    $title: String!
    $description: String!
    $price: Int
    $quantity: Int
    $category: String!
    $image: String!
    $old_price: Int
  ) {
    insert_products_one(
      object: {
        title: $title
        description: $description
        price: $price
        old_price: $old_price
        quantity: $quantity
        category: $category
        image: $image
      }
    ) {
      user_id
      title
      description
      price
      old_price
      quantity
      category
      image
    }
  }
`;

export const removeProductFromFavorites = gql`
  mutation removeProductFromFavorites($id: Int) {
    delete_favorites(where: { id: { _eq: $id } }) {
      returning {
        products
        id
      }
    }
  }
`;
