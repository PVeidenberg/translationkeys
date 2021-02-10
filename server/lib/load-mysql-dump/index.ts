import { exec } from "child_process";

export interface MysqlDumpConfig {
  filename: string;
  user: string;
  password: string;
  host: string;
  port: number;
  protocol: string;
  database: string;
}

export interface MysqlDumpResult {
  timeTaken: number;
  output: string;
}

export default async function loadMysqlDump(config: Partial<MysqlDumpConfig> = {}): Promise<MysqlDumpResult> {
  const cfg: MysqlDumpConfig = {
    filename: "dump.sql",
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    protocol: "tcp",
    database: "dump",
    ...config,
  };

  const command = `psql "postgresql://${cfg.user}:${cfg.password}@${cfg.host}:${cfg.port}/${cfg.database}" < ${cfg.filename}`;

  console.log(command)

  return new Promise<MysqlDumpResult>((resolve, reject) => {
    const startTime = Date.now();

    exec(command, (error, stdout, _stderr) => {
      const timeTaken = Date.now() - startTime;

      if (error !== null) {
        reject(error);

        return;
      }

      // if (stderr.length > 0) {
      //   reject(new Error(`Loading dump failed: ${stderr}`));

      //   return;
      // }

      resolve({
        timeTaken,
        output: stdout,
      });
    });
  });
}
