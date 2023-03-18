import gql from "graphql-tag";

export const checkProduct = gql`
  query checkProduct($productId: bigint!) {
    favorites(where: { product_id: { _eq: $productId } }) {
      id
    }
  }
`;

export const getFavorites = gql`
  query {
    favorites {
      product {
        id
        description
        created_at
        category
        image
        old_price
        price
        quantity
        title
        user_id
      }
    }
  }
`;

export const getProductsById = gql`
  query ($id: bigint!) {
    products(where: { id: { _eq: $id } }) {
      id
      created_at
      title
      user_id
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
      query ($text: String!) {
        products(
          order_by: { created_at: desc }
          where: { category: { _eq: $text } }
        ) {
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
      query ($text: String!) {
        products(
          order_by: { price: desc }
          where: { category: { _eq: $text } }
        ) {
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
      query ($text: String!) {
        products(
          order_by: { price: asc }
          where: { category: { _eq: $text } }
        ) {
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
