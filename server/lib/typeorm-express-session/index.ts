import { Store } from "express-session";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Session extends BaseEntity {
  @PrimaryColumn("text")
  sessionId!: string;

  @Column({ type: "text", nullable: true})
  @Index()
  userId!: string;

  @Column("text")
  data!: string;

  @Index()
  @Column("date")
  expiryDate!: Date;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;
}

export type ResultCallback = (error?: Error, result?: any | null | undefined) => void;
export type AllCallback = (error?: Error, result?: { [sid: string]: any } | null) => void;
export type ErrorCallback = (error?: Error) => void;

export interface TypeormSessionStoreOptions {
  purgeIntervalMs?: number;
}

const dummyErrorCallback: ErrorCallback = (_error) => {
  // dummy callback does not do anything
};

// default purge interval is 60 minutes
export const DEFAULT_PURGE_INTERVAL_MS = 60 * 60 * 1000;

export class TypeormSessionStore extends Store {
  private lastPurgeTime: number | undefined = undefined;
  private options: Required<TypeormSessionStoreOptions>;

  constructor(options?: TypeormSessionStoreOptions) {
    super();

    this.options = {
      purgeIntervalMs: DEFAULT_PURGE_INTERVAL_MS,
      ...options,
    };
  }

  static async destroyUserSession(userId: string) {
    await Session.delete({ userId });
  }

  get = async (sid: string, callback: ResultCallback) => {
    try {
      // find session by id
      const session = await Session.findOne({ where: { id: sid } });

      // respond with nothing if not found or expired
      if (!session || session.expiryDate.getTime() < Date.now()) {

        callback();

        return;
      }

      // attempt to parse the session data as json
      const data = JSON.parse(session.data);

      callback(undefined, data);
    } catch (error) {
      callback(error);
    }
  };

  set = async (sid: string, session: any, callback = dummyErrorCallback) => {
    try {
      const data = JSON.stringify(session);
      const userId = session.userId;
      const expiryDate = new Date(Date.now() + (session.cookie.maxAge || 3600));

      // add or update session entry
      await Session.create({
        sessionId: sid,
        data,
        userId,
        expiryDate,
      }).save();

      // delete expired sessions
      void this.purgeIfNeeded();

      callback();
    } catch (error) {
      callback(error);
    }
  };

  destroy = async (sid: string | string[], callback = dummyErrorCallback) => {
    try {
      // delete the session
      await Session.delete(sid);

      callback();
    } catch (error) {
      callback(error);
    }
  };

  touch = async (sid: string, session: any, callback = dummyErrorCallback) => {
    try {
      // update session expiry date
      try {
        await getConnection()
          .getRepository(Session)
          .createQueryBuilder("session")
          .update()
          .set({
            expiryDate: new Date(Date.now() + (session.cookie.maxAge || 3600)),
          })
          .where("session.id = :sid", {
            sid,
          })
          .execute();

      } catch (_error) {
        // session probably does not exist, ignore
      }

      callback();
    } catch (error) {
      callback(error);
    }
  };

  all = async (callback: AllCallback) => {
    try {
      // find all sessions
      const entries = await Session.find();
      const sessions: { [sid: string]: any } = {};

      entries.forEach((entry) => {
        sessions[entry.sessionId] = JSON.parse(entry.data);
      });

      callback(undefined, sessions);
    } catch (error) {
      callback(error);
    }
  };

  async purge() {
    await getConnection()
      .getRepository(Session)
      .createQueryBuilder("session")
      .delete()
      .where("session.expiryDate <= NOW()")
      .execute();
  }

  private async purgeIfNeeded() {
    // don't purge more often than purgeIntervalMs
    if (this.lastPurgeTime === undefined || Date.now() - this.lastPurgeTime >= this.options.purgeIntervalMs) {
      this.lastPurgeTime = Date.now();

      return this.purge();
    }
  }
}
