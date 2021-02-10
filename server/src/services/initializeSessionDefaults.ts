export function initializeSessionDefaults<T>(session: any, defaults: T): T {
  const keys = Object.keys(defaults) as (keyof T)[];

  keys.forEach((key) => {
    if (session[key as string] === undefined) {
      session[key as string] = defaults[key];
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (session as any) as T;
}
