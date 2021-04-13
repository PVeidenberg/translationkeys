// tslint:disable:no-console
import * as path from "path";
import chalk from "chalk";
import { Migrator, MigratorTypeormStorage } from "migrator-js";
import { Connection } from "typeorm";
import { config, DatabaseConfig } from "../src/config";
import { openDatabaseConnection } from "../src/services/openDatabaseConnection";

export interface AppMigrationContext {
  connection: Connection;
  databaseConfig: DatabaseConfig;
}

async function run() {
  // connection is passed as context to each migration
  const connection = await openDatabaseConnection(config.database);

  // check whether to run all migrations without asking the user
  const autoRun = process.argv.findIndex((arg) => arg === "-y") !== -1;

  // show an empty line between previous content
  console.log("");

  console.log(config);

  // create the migrator
  const migrator = new Migrator<AppMigrationContext>(
    {
      connection,
      databaseConfig: config.database,
    },
    {
      pattern: path.join(__dirname, "..", "migrations", "!(*.spec|*.test|*.d).{ts,js}"),
      storage: new MigratorTypeormStorage({
        type: "postgres",
        host: config.database.host,
        port: config.database.port,
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
      }),
    },
  );

  // attempt to run the migrator
  try {
    const result = await migrator.migrate(autoRun);

    // extract results
    const { pendingMigrations, chosenMigrations, performedMigrations, failedMigrations } = result;

    // print results to console
    if (pendingMigrations.length === 0) {
      console.info(`${chalk.black.bgWhite(" NOTHING TO MIGRATE ")} `);
    } else if (chosenMigrations.length === 0) {
      console.info(`${chalk.black.bgWhite(" NO MIGRATIONS CHOSEN ")} `);
    } else if (performedMigrations.length > 0 && failedMigrations.length === 0) {
      console.info(`${chalk.black.bgGreen(" ALL MIGRATIONS SUCCEEDED ")} - ${performedMigrations.length} total`);
    } else if (performedMigrations.length === 0 && failedMigrations.length > 0) {
      console.error(`${chalk.black.bgRed(" ALL MIGRATIONS FAILED ")} - ${failedMigrations.length} total`);
    } else {
      console.error(
        `${chalk.black.bgYellow(" SOME MIGRATIONS FAILED ")} - ${performedMigrations.length} succeeded, ${
          failedMigrations.length
        } failed`,
      );
    }

    // exit with a non-zero code if any of the migrations failed
    if (failedMigrations.length === 0) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (e) {
    console.error(`${chalk.black.bgRed(" RUNNING MIGRATOR FAILED ")}`, e.stack);
  } finally {
    // close connections
    await migrator.close();
    await connection.close();
  }
}

run().catch((e) => console.error(chalk.black.bgRed(" RUNNING MIGRATOR FAILED "), e));
