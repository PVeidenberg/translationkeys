import { ApolloClient, InMemoryCache } from "@apollo/client";
import introspection from "../introspection";

export function setupApolloClient() {

  // setup apollo graphql client
  const client = new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes: introspection.possibleTypes,
    }),
    defaultOptions: {
      mutate: {
        errorPolicy: "all",
      },
    },
  });

  return client;
}
