import { Locale } from "./constants";
import { UserEntity} from "./entities/UserEntity";
// import { createTypeormLoader, DataLoaderFactory } from "./services/dataLoader";

// session information
export interface SessionInfo {
  id: string | undefined;
  requestCount: number;
}

// metadata about each request
export interface RequestMetadata {
  locale: Locale;
  client: {
    operation?: string;
    path?: string;
    version?: string;
    ipAddress?: string;
  };
}

// application context passed to resolvers etc, exists one per query
export class Context {
//   loader: DataLoaderFactory;

  constructor(public session: SessionInfo, public viewer: UserEntity | undefined, public metadata: RequestMetadata) {
    // setup generic loader for simple get-by-id batch queries
    // this.loader = createTypeormLoader();
  }

  login = (userId: string) => {
    this.session.id = userId;
  };

  logout = () => {
    this.session.id = undefined;
    this.viewer = undefined;
  };

  isViewer = (id: string) => {
    if (!this.viewer) {
      return false;
    }

    return this.viewer.id === id;
  };

  isLoggedIn = () => {
    if (!this.viewer) {
      return false;
    }

    return true;
  };

//   hasAnyScopes = (authorizedScopes: UserScope[]) => {
//     if (!this.viewer) {
//       return false;
//     }

//     // user needs to have at least one of the accepted scopes
//     return this.viewer.scopes.some((userScope) => authorizedScopes.includes(userScope));
//   };
}
