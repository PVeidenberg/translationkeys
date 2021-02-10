import { UserEntity } from "../entities/UserEntity";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isUserEntity(user: any): user is UserEntity {
  // check for "probably UserEntity"
  return typeof user === "object" && user !== null && typeof user.id === "string" && typeof user.email === "string";
}
