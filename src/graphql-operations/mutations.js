import gql from "graphql-tag";

// title, description, user_id, price, quantity, category, image, old_price

export const addProductInFavorite = gql`
  mutation enrollProds($productId: bigint!) {
    insert_favorites_one(object: { product_id: $productId }) {
      id
      user_id
      product_id
    }
  }
`;

export const createChat = gql`
  mutation createChat($receiver_id: String!, $product_id: Int!) {
    insert_chats_one(
      object: { receiver_id: $receiver_id, product_id: $product_id }
    ) {
      id
    }
  }
`;

export const createMessage = gql`
  mutation createMessage(
    $id: String!
    $receiver_id: String
    $sender_avatar_url: String!
    $sender_username: String!
    $content: String!
    $chat_id: Int!
  ) {
    insert_messages_one(
      object: {
        id: $id
        receiver_id: $receiver_id
        content: $content
        chat_id: $chat_id
        sender_username: $sender_username
        sender_avatar_url: $sender_avatar_url
      }
    ) {
      id
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
