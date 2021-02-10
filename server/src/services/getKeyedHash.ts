import { createHmac, HexBase64Latin1Encoding } from "crypto";

export function getKeyedHash(
  hashData: string,
  key: string,
  algorithm = "sha512",
  digest: HexBase64Latin1Encoding = "hex",
): string {
  return createHmac(algorithm, key).update(hashData).digest(digest);
}
