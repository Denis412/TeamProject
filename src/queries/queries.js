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

export const getProducts = gql`
  query {
    products {
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
  if(category === "Все"){
  const data = gql`
    query {
      products {
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
  return data;
  }
  else{
    const data = gql`
      query ($text: String!) {
        products(where: { category: { _eq: $text } }) {
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
    return data;
  }
};
