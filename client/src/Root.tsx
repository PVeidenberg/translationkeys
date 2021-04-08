import { ApolloProvider } from "@apollo/client";
import React from "react";
import { App } from "./App";
import { setupApolloClient } from "./services/setupApolloClient";
import { AppContext, useAppState } from "../src/projectState/AppContext";

const apolloClient = setupApolloClient();

export const Root: React.FC = () => {
  const projectState = useAppState();

  return (
    <ApolloProvider client={apolloClient}>
      <AppContext.Provider value={projectState}>
        <App />
      </AppContext.Provider>
    </ApolloProvider>
  );
};
