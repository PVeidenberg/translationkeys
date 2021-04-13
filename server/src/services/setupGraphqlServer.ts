import { ApolloServer, Config, PlaygroundConfig } from "apollo-server-express";
// import { RequestHandler, Response, Request } from "express";
import { GraphQLSchema } from "graphql";
import { ApolloContext } from "../app";
import { createContext } from "./createContext";

export interface SetupApolloServerOptions extends Config {
  path: string;
  schema: GraphQLSchema;
  playgroundEnabled?: boolean;
}

export function setupGraphqlServer({
  path,
  schema,
  playgroundEnabled,
  ...apolloOptions
}: SetupApolloServerOptions): ApolloServer {
  const playgroundConfig: PlaygroundConfig = {
    settings: {
      "general.betaUpdates": false,
      "editor.cursorShape": "line",
      "editor.theme": "dark",
      "editor.reuseHeaders": true,
      "tracing.hideTracingResponse": true,
      "queryPlan.hideQueryPlanResponse": true,
      "editor.fontSize": 14,
      "editor.fontFamily": "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
      "request.credentials": "same-origin",
    },
  };

  return new ApolloServer({
    schema,
    playground: playgroundEnabled ? playgroundConfig : false,
    context: async ({ req: request, connection }: ApolloContext) => {
      // handle context for web-socket connections (context is resolved by subscriptions > onConnect)

      if (connection) {
        return connection.context;
      }

      // session should be available at this point
      if (!request.session) {
        throw new Error("Session is not available, this should not happen");
      }

      // create and return request context
      return createContext(request);
    },
    ...apolloOptions,
  });
}
