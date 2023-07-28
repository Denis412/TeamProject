import gql from "graphql-tag";

export const getObjectByIdDocumentNode = (object, properties) => {
  return gql`
    query ${object}($id: Int!) {
      ${object}(id: $id)
        ${properties}
    }
  `;
};

export const getPaginateObjectsDocumentNode = (object, properties) => {
  return gql`
    query ${object}($page: Int, $perPage: Int, $where: PaginatorWhere, $orderBy: PaginatorOrderBy) {
      ${object}(page: $page, perPage: $perPage, where: $where, orderBy: $orderBy)
        ${properties}
    }
  `;
};

export const getCreateObjectDocumentNode = (object, properties) => {
  const capitalizeObject = object[0].toUpperCase() + object.slice(1);

  return gql`
    mutation Create${capitalizeObject}($input: Create${capitalizeObject}Input!) {
      create${capitalizeObject}(input: $input)
        ${properties}
    }
  `;
};

export const getUpdateObjectDocumentNode = (object, properties) => {
  const capitalizeObject = object[0].toUpperCase() + object.slice(1);

  return gql`
    mutation Update${capitalizeObject}($id: Int!, $input: Update${capitalizeObject}Input!) {
      update${capitalizeObject}(id: $id, input: $input)
        ${properties}
    }
  `;
};

export const getDeleteObjectDocumentNode = (object) => {
  const capitalizeObject = object[0].toUpperCase() + object.slice(1);

  return gql`
    mutation Delete${capitalizeObject}($id: Int!) {
      delete${capitalizeObject}(id: $id) {
        id
      }
    }
  `;
};

export const getSignUpDocumentNode = () => {
  return gql`
    mutation SignUp($input: SignUpInput!) {
      SignUp(input: $input) {
        id
      }
    }
  `;
};

export const getSignInDocumentNode = () => {
  return gql`
    mutation SignIn($input: SignInInput!) {
      SignIn(input: $input) {
        user_id
        access_token
      }
    }
  `;
};

const graphqlAPI = {
  getObjectByIdDocumentNode,
  getPaginateObjectsDocumentNode,
  getCreateObjectDocumentNode,
  getUpdateObjectDocumentNode,
  getDeleteObjectDocumentNode,
  getSignUpDocumentNode,
  getSignInDocumentNode,
};

export default graphqlAPI;
