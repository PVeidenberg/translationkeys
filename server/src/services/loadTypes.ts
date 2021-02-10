import glob from "fast-glob";

export async function loadTypes(globs: string[]) {
  // glob expects only forward slahes in patterns https://github.com/mrmlnc/fast-glob#pattern-syntax
  const filenames = await glob(globs.map((glob) => glob.replace(/\\/g, "/")));

  return filenames.map((filename) => require(filename));
}
