import gql from "graphql-tag";

// title, description, user_id, price, quantity, category, image, old_price

export const addProductInFavorite = gql`
  mutation enrollProds($input: CreateFavoriteInput!) {
    createFavorite(input: $input) {
      id
      product {
        id
      }
    }
  }
`;

export const signUp = gql`
  mutation sign($input: SignUpInput!) {
    SignUp(input: $input) {
      id
    }
  }
`;

export const signIn = gql`
  mutation sign($input: SignInInput!) {
    SignIn(input: $input) {
      user_id
      access_token
    }
  }
`;

export const addProductInCart = gql`
  mutation Cart($input: CreateCartInput!) {
    createCart(input: $input) {
      id
      product {
        id
      }
    }
  }
`;

// export default deleteProductInFavorite = gql``;

export const addProductToCatalog = gql`
  mutation addProductToCatalog($input: CreateProductInput!) {
    createProduct(input: $input) {
      user {
        id
      }
      title
      description
      price
      old_price
      quantity
      category {
        id
      }
      image
    }
  }
`;

export const removeProductFromFavorites = gql`
  mutation removeProductFromFavorites($id: number!) {
    removeFavorite(id: $id) {
      id
    }
  }
`;

export const removeProductFromCarts = gql`
  mutation removeProductFromCarts($id: number!) {
    removeCart(id: $id) {
      id
    }
  }
`;

export const removeProductFromProducts = gql`
  mutation removeProductFromCarts($id: number!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
