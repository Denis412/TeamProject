import gql from "graphql-tag";

// title, description, user_id, price, quantity, category, image, old_price

export const addProductToFavorites = gql`
  mutation addProductToFavorites($product: jsonb) {
    insert_favorites1_one(object: { products: $product }) {
      products
    }
  }
`;

export const updateFavorites = gql`
  mutation AddFavoriteProduct($user_id: String!, $product_id: jsonb!) {
    update_favorites1(
      where: { user_id: { _eq: $user_id } }
      _append: { products: $product_id }
    ) {
      affected_rows
      returning {
        products
        user_id
      }
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
    delete_favorites1(where: { id: { _eq: $id } }) {
      returning {
        products
        id
      }
    }
  }
`;
