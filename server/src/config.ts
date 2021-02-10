import { join } from "path";
import { util } from "config";
import normalizeType from "normalize-type";

export interface Config {
  clientBaseUrl: string;
  server: ServerConfig;
  graphql: GraphqlConfig;
  session: SessionConfig;
  database: DatabaseConfig;
  google: GoogleConfig;
  rules: RulesConfig;
}

export interface ServerConfig {
  host: string;
  port: number;
  ssl: boolean;
  cert: string;
  key: string;
  corsOriginWhitelist: string[];
}

export interface GraphqlConfig {
  playground: boolean;
  introspection: boolean;
  debug: boolean;
  simulatedLatency: number;
}

export interface SessionConfig {
  secret: string;
  maxAge: number;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  maxQueryExecutionTime: number;
  sync: boolean;
}

export interface GoogleConfig {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
}

export interface RulesConfig {
  validateEmailValidForSeconds: number;
}

// always load from config directory relative to given file
export const config = normalizeType(util.loadFileConfigs(join(__dirname, "..", "config"))) as Config;
