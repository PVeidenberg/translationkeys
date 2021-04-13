export const fieldLength = {
  uuid: 36,
  email: 255,
  hash: 128,
  short: 36,
  medium: 255,
  long: 4048,
  name: 100,
  url: 2000,
  password: 10,
};

export enum Locale {
  "EN" = "EN",
  "ET" = "ET",
  "RU" = "RU",
  "LV" = "LV",
  "LT" = "LT",
}

export const defaultLocale = Locale.EN;
