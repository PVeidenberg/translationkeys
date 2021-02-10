import yargs from "yargs";
import { config } from "../src/config";
import { startServer } from "../src/services/startServer";

// configure arguments
const argv = yargs
  .usage("Usage: $0 [options]")
  .example(`$0 --port ${config.server.port}`, `starts the development server on port ${config.server.port}`)
  .alias("p", "port")
  .describe("p", "Sets port to use")
  .default("port", config.server.port).argv;

// extract arguments
const port: number = argv.port;

(async () => {
  // start the server
  await startServer({
    server: {
      port,
    },
  });
})().catch((error) => console.error(error));
