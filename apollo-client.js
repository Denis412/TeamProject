import { ApolloClient /*, createHttpLink */ } from "@apollo/client/core";
import { getClientOptions } from "src/apollo";

const options = /* await */ getClientOptions(/* {app, router ...} */);
const apolloClient = new ApolloClient(options);

export default apolloClient;
