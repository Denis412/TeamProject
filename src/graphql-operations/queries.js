import gql from "graphql-tag";

export const checkFavorites = gql`
  query checkProduct($where: PaginatorWhere) {
    favorites(where: $where) {
      id
      product {
        id
      }
      user {
        id
      }
    }
  }
`;

export const checkCart = gql`
  query checkProduct($where: PaginatorWhere) {
    carts(where: $where) {
      id
      product {
        id
      }
      user {
        id
      }
    }
  }
`;

export const getFavorites = gql`
  query {
    favorites {
      id
      product {
        id
        description
        created_at
        category {
          name
        }
        image
        old_price
        price
        quantity
        title
      }
    }
  }
`;

export const getCarts = gql`
  query {
    carts {
      id
      product {
        id
        description
        created_at
        category {
          name
        }
        image
        old_price
        price
        quantity
        title
      }
    }
  }
`;

export const getProductsById = gql`
  query ($id: Int!) {
    product(id: $id) {
      id
      created_at
      title
      user {
        id
      }
      description
      price
      old_price
      quantity
      image
      category {
        name
      }
    }
  }
`;

//export const getProductsByUser = gql`
// query ($id: String!){
//   products(where: {user_id: {_eq: $id}}) {
//   category
//   created_at
//   description
//   id
//   image
//   old_price
//   price
//   quantity
//   title
// }
// }
// `;

export const getProductsByUser = gql`
  query ($where: PaginattorWhere) {
    products(where: $where) {
      category {
        name
      }
      created_at
      description
      id
      image
      old_price
      price
      quantity
      title
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
          category {
            name
          }
        }
      }
    `;
    return data;
  } else {
    const data = gql`
      query ($where: PaginatorWhere) {
        products(where: $where) {
          id
          created_at
          title
          description
          price
          quantity
          image
          category {
            name
          }
        }
      }
    `;
    return data;
  }
};

export const getProductByDateDesc = (category) => {
  if (category === "Все") {
    const data = gql`
      query ($orderBy: PaginatorOrderBy) {
        products(orderBy: $orderBy) {
          id
          category {
            name
          }
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
      query ($where: PaginatorWhere, $orderBy: PaginatorOrderBy) {
        products(orderBy: $orderBy, where: $where) {
          id
          category {
            name
          }
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
      query ($where: PaginatorWhere, $orderBy: PaginatorOrderBy) {
        products(where: $where, orderBy: $orderBy) {
          id
          category {
            name
          }
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
      query ($orderBy: PaginatorOrderBy, $where: PaginatorWhere) {
        products(orderBy: $orderBy, where: $where) {
          id
          category {
            name
          }
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
      query ($orderBy: PaginatorOrderBy) {
        products(orderBy: $orderBy) {
          id
          category {
            name
          }
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
      query ($where: PaginatorWhere) {
        products(orderBy: { price: asc }, where: $where) {
          id
          category {
            name
          }
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

export const getSearchedItem = (category) => {
  if (category === "Все") {
    const data = gql`
      query ($where: PaginatorWhere) {
        products(where: $where) {
          id
          category {
            name
          }
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
      query ($where: PaginatorWhere) {
        products(where: $where) {
          id
          category {
            name
          }
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

export const getByCategory = gql`
  query ($where: PaginatorWhere) {
    products(where: $where) {
      id
      created_at
      title
      description
      price
      quantity
      image
      category {
        name
      }
    }
  }
`;

//CATEGORIES

export const getCategories = gql`
  query {
    categories {
      id
      name
    }
  }
`;
