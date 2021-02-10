import * as http from "http";
import * as https from "https";
import * as express from "express";

export function createServer(app: express.Express): http.Server | https.Server {
    
  return http.createServer(app);
}
