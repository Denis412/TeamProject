import { createHttpLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

export /* async */ function getClientOptions(/* {app, router, ...} */ options) {
  //https://wanted-bull-47.hasura.app/v1/graphql
  const httpLink = createHttpLink({
    uri: "http://localhost:3000/graphql",
    credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");

    if (token) {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return {
      headers: {
        ...headers,
      },
    };
  });

  // const errorLink = onError(
  //   ({ graphQLErrors, networkError, operation, forward }) => {
  //     if (graphQLErrors) {
  //       graphQLErrors.forEach((error) => {
  //         if (error.message.includes("jwt expired")) {
  //           const oldHeaders = operation.getContext().headers;
  //           operation.setContext({
  //             headers: {
  //               ...oldHeaders,
  //               authorization: getNewToken(),
  //             },
  //           });
  //           // Retry the request, returning the new observable
  //           return forward(operation);
  //         }
  //       });
  //     }
  //     if (networkError) {
  //       console.log("Network error", networkError);
  //     }
  //   }
  // );

  return Object.assign(
    // General options.
    {
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      onerror,
    }
    // Specific Quasar mode options.
    // process.env.MODE === "spa"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "ssr"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "pwa"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "bex"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "cordova"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "capacitor"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "electron"
    //   ? {
    //       //
    //     }
    //   : {},
    // // dev/prod options.
    // process.env.DEV
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.PROD
    //   ? {
    //       //
    //     }
    //   : {},
    // // For ssr mode, when on server.
    // process.env.MODE === "ssr" && process.env.SERVER
    //   ? {
    //       ssrMode: true,
    //     }
    //   : {},
    // // For ssr mode, when on client.
    // process.env.MODE === "ssr" && process.env.CLIENT
    //   ? {
    //       ssrForceFetchDelay: 100,
    //     }
    //   : {}
  );
}
