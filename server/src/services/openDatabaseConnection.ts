import { join } from "path";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { Session } from "../../lib/typeorm-express-session";
// import { Session } from "../../typeorm-express-session";
import { DatabaseConfig } from "../config";
import { closeDatabaseConnection } from "./closeDatabaseConnection";


export async function openDatabaseConnection(
  databaseConfig: DatabaseConfig,
  userOptions: Partial<ConnectionOptions> = {
    type: "postgres",
  },
): Promise<Connection> {
  // only allow postgres connections
  /* istanbul ignore if */
  if (userOptions.type !== "postgres") {
    throw new Error("Expected Postgres connection options");
  }

  // close existing connection if one exists
  await closeDatabaseConnection();

  // create a new connection if unavailable
  const baseOptions: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "translatekeys",
    maxQueryExecutionTime: 1001,
    entities: [join(__dirname, "..", "entities", "!(*.test).+(ts|js)"), Session],
    synchronize: databaseConfig.sync,
  };

  // build combined options
  const options: ConnectionOptions = {
    ...baseOptions,
    ...{
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      maxQueryExecutionTime: databaseConfig.maxQueryExecutionTime,
    },
    ...userOptions,
  };

  // create the connection
  const connection = await createConnection(options);

  // throw error if failed to actually connect
  /* istanbul ignore if */
  if (!connection.isConnected) {
    throw new Error("Connecting to database failed");
  }

  return connection;
}
