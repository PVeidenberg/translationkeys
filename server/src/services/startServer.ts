import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import { DeepPartial } from "typeorm";
import { setupApp } from "../app";
import { config, Config } from "../config";
import { closeDatabaseConnection } from "./closeDatabaseConnection";
import { openDatabaseConnection } from "./openDatabaseConnection";
import { createServer } from "./createServer";

export interface Server {
  app: Application;
  port: number;
  apolloServer: ApolloServer;
  httpServer: HttpServer | HttpsServer;
  terminate: () => Promise<void>;
}

export async function startServer(overrideConfig: DeepPartial<Config> = {}): Promise<Server> {
  // open database connection
  await openDatabaseConnection(config.database);

  // setup the server
  const { apolloServer, app } = await setupApp(config);

  // create the http(s) server
  const httpServer = createServer(app);

  // start the server
  httpServer.listen(config.server.port, () => {
    console.log("server started");
  });

  // listen for interrupt and shut down gracefully, releasing all resources
  process.on("SIGINT", async () => {
    httpServer.close();

    await closeDatabaseConnection();

    process.exit(0);
  });

  return {
    app,
    port: config.server.port,
    apolloServer,
    httpServer,
    terminate: async () => {
      httpServer.close();

      await closeDatabaseConnection();
    },
  };
}
