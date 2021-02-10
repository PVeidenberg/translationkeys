import { getConnection } from "typeorm";

export async function closeDatabaseConnection(name = "default") {
  // attempt to close existing database connection if exists
  try {
    // this will throw if no connection exists
    const connection = getConnection(name);

    await connection.close();

    return true;
  } catch (e) {
    // ignore not having existing connection
    return false;
  }
}
