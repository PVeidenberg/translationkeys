import * as path from "path";
import loadMysqlDump from "../lib/load-mysql-dump";
import { AppMigrationContext } from "../scripts/migrate";

export default async (context: AppMigrationContext): Promise<string> => {
  const config = context.databaseConfig;

  const result = await loadMysqlDump({
    filename: path.join(__dirname, "..", "db", "db.sql"),
    user: config.username,
    password: config.password,
    host: config.host,
    port: config.port,
    database: config.database,
  });

  return `OK:${result.timeTaken}`;
};
