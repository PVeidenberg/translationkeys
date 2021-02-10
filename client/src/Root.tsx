import { ApolloProvider } from "@apollo/client";
import React from "react";
import { App } from "./App";
import { setupApolloClient } from "./services/setupApolloClient";

const apolloClient = setupApolloClient();

export const Root: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
