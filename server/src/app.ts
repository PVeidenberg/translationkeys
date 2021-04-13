import "reflect-metadata";
import express from "express";
import { join } from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { loadTypes } from "./services/loadTypes";
import session from "express-session";
import { ApolloServer } from "apollo-server-express";
import { makeSchema, fieldAuthorizePlugin } from "@nexus/schema";
import { Config } from "./config";
import { SessionInfo, Context } from "./context";
import { TypeormSessionStore } from "../lib/typeorm-express-session/index";
import { setupGraphqlServer } from "./services/setupGraphqlServer";

import { closeDatabaseConnection } from "./services/closeDatabaseConnection";

// configured app info
export interface App {
  apolloServer: ApolloServer;
  app: express.Express;
  terminate: () => Promise<void>;
}

// properties provided to the context function of ApolloServer constructor
export interface ApolloContext {
  req: express.Request;
  connection?: express.Application & {
    context: Context;
  };
  [x: string]: unknown;
}

// default session contents
export const sessionDefaults: SessionInfo = {
  userId: undefined,
  requestCount: 0,
};

export async function setupApp(config: Config): Promise<App> {
  // load schema types and resolvers
  const types = await loadTypes([join(__dirname, "schema", "**", "!(*.test).ts")]);
  // build graphql executable schema
  const schema = makeSchema({
    types,
    outputs: {
      schema: join(__dirname, "..", "schema.graphql"),
      typegen: join(__dirname, "typings.ts"),
    },
    typegenAutoConfig: {
      contextType: "ctx.Context",
      sources: [
        {
          alias: "ctx",
          source: join(__dirname, "context.ts"),
        },
      ],
      headers: ["/* eslint-disable */", 'import { FileUpload } from "graphql-upload";'],
    },
    plugins: [fieldAuthorizePlugin()],
    prettierConfig: join(__dirname, "..", ".prettierrc"),
    nonNullDefaults: {
      input: true,
      output: true,
    },
  });

  // setup session middleware
  const sessionMiddleware = session({
    rolling: false,
    saveUninitialized: false,
    resave: false,
    secret: config.session.secret,
    cookie: {
      httpOnly: true,
      secure: "auto",
      maxAge: config.session.maxAge,
      path: "/",
      // sameSite: "none",
    },
    name: `${config.server.host}.translatekeys.sid`,
    store: new TypeormSessionStore({}),
  });

  const graphqlPath = "/api/graphql";

  // setup graphql server
  const apolloServer = setupGraphqlServer({
    path: graphqlPath,
    schema,
    playgroundEnabled: config.graphql.playground,
    introspection: config.graphql.introspection,
    debug: config.graphql.debug,
  });

  // get the express application
  const app = express();

  // trust the proxy
  app.enable("trust proxy");

  // apply urlencoded body parser
  app.use(bodyParser.urlencoded({ extended: false, limit: "50MB" }));
  app.use(bodyParser.json());

  // setup cookies support used by sessions
  app.use(cookieParser());

  // setup session support (used by authentication etc)
  app.use(sessionMiddleware);

  // initialize session middleware
  app.use((request, _response, next) => {
    // should not happen
    if (!request.session) {
      throw new Error("Session support is not properly configured");
    }

    next();
  });

  // setup graphql middleware
  apolloServer.applyMiddleware({
    app,
    path: graphqlPath,
    bodyParserConfig: false,
    cors: {
      origin: config.server.corsOriginWhitelist,
      credentials: true,
    },
    // TODO: implement proper health check
    onHealthCheck: (_request) => Promise.resolve(true),
  });

  return {
    apolloServer,
    app,
    terminate: async () => {
      await closeDatabaseConnection();
    },
  };
}
