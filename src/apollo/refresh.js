import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const getNewToken = () => {
  const tokens = useMutation(gql`
    mutation {
      refreshToken {
        token_type
        access_token
        expires_in
        refresh_token
      }
    }
  `);
};
