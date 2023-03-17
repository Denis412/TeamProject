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

export const getProductsById = gql`
  query ($id: bigint!) {
    products(where: { id: { _eq: $id } }) {
      id
      created_at
      title
      description
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

export const getProductByDateDesc = (category) => {
  if (category === "Все") {
    const data = gql`
      query {
        products(order_by: { created_at: desc }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;
    return data;
  } else {
    const data = gql`
      query($text: String!) {
        products(order_by: { created_at: desc }, where: {category: {_eq: $text}}) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;
    return data;
  }
};

export const getProductByPriceDesc = (category) => {
  if (category === "Все") {
    const data = gql`
      query {
        products(order_by: { price: desc }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;
    return data;
  } else {
    const data = gql`
      query($text: String!) {
        products(order_by: { price: desc }, where: {category: {_eq: $text}}) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;
    return data;
  }
};

export const getProductByPriceAsc = (category) => {
  if (category === "Все") {
    const data = gql`
      query {
        products(order_by: { price: asc }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;
    return data;
  } else {
    const data = gql`
      query($text: String!) {
        products(order_by: { price: asc }, where: {category: {_eq: $text}}) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
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
