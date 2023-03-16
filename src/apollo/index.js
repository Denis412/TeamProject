import { createHttpLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import Clerk from "@clerk/clerk-js";
// import { setContext } from "@apollo/client/link/context";

export /* async */ function getClientOptions(/* {app, router, ...} */ options) {
  const httpLink = createHttpLink({
    uri: "https://wanted-bull-47.hasura.app/v1/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem("token");

    console.log("tok", token);

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  // link: createHttpLink({
  //   uri:
  //     process.env.GRAPHQL_URI ||
  //     // Change to your graphql endpoint.
  //     "https://wanted-bull-47.hasura.app/v1/graphql",
  // }),
  // cache: new InMemoryCache(),

  return Object.assign(
    // General options.
    {
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
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
