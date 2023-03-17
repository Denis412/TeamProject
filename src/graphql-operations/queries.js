import gql from "graphql-tag";

// export const products = gql`
//   query {
//     products {
//       id
//       created_at
//       title
//       description
//       user_id
//       price
//       old_price
//       quantity
//       image
//       category
//     }
//   }
// `;

export const getProductsInFavorites = gql`
  query getProductsInFavorites {
    favorites {
      products
    }
  }
`;

export const getProductsById = gql`
  query ($id: bigint!) {
    products(where: { id: { _eq: $id } }) {
      id
      created_at
      title
      description
      user_id
      price
      old_price
      quantity
      image
      category
    }
  }
`;

export const filtredProduct = (category) => {
  if (category === "Все") {
    const data = gql`
      query {
        products {
          id
          created_at
          title
          description
          user_id
          price
          quantity
          image
          category
        }
      }
    `;
    return data;
  } else {
    const data = gql`
      query ($text: String!) {
        products(where: { category: { _eq: $text } }) {
          id
          created_at
          title
          description
          user_id
          price
          quantity
          image
          category
        }
      }
    `;
    return data;
  }
};

//CATEGORIES

export const getCategories = gql`
  query {
    categories {
      category_name
    }
  }
`;
