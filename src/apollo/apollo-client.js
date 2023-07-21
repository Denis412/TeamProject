import { getClientOptions } from "src/apollo";
import { ApolloClient /*, createHttpLink */ } from "@apollo/client/core";

const options = /* await */ getClientOptions(/* {app, router ...} */);
const apolloClient = new ApolloClient(options);

export default apolloClient;
