import { Request } from "express";
import { defaultLocale } from "../constants";
import { SessionInfo, RequestMetadata, Context } from "../context";
import { UserEntity } from "../entities/UserEntity";

export async function createContext(request: Request) {
  // initialize session and make the viewer a real user entity instance if available
  const session = (request.session as unknown) as SessionInfo;
  const viewer = session.userId ? await UserEntity.findOne({ where: { id: session.userId } }) : undefined;

  // extract debug request headers (no available when using websocket transport)
  const clientOperationHeader = request.headers["x-operation"];
  const clientPathHeader = request.headers["x-path"];
  const clientVersionHeader = request.headers["x-version"];
  const clientIpAddress = request.ip;

  // build request metadata
  const metadata: RequestMetadata = {
    locale: defaultLocale,
    client: {
      operation: typeof clientOperationHeader === "string" ? clientOperationHeader : undefined,
      path: typeof clientPathHeader === "string" ? clientPathHeader : undefined,
      version: typeof clientVersionHeader === "string" ? clientVersionHeader : undefined,
      ipAddress: typeof clientIpAddress === "string" ? clientIpAddress : undefined,
    },
  };
  return new Context(session, viewer, metadata);
}
