import gql from "graphql-tag";

// title, description, user_id, price, quantity, category, image, old_price

export const addProductInFavorite = gql`
  mutation enrollProds($productId: bigint!) {
    insert_favorites_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`;

export const addProductInCart = gql`
  mutation Cart($productId: bigint!) {
    insert_carts_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`;

// export default deleteProductInFavorite = gql``;

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
  mutation removeProductFromFavorites($id: bigint!) {
    delete_favorites_by_pk(id: $id) {
      id
    }
  }
`;
