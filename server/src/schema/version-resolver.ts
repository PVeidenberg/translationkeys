import { extendType } from "@nexus/schema";
import { version as serverVersion } from "../../package.json";

export default extendType({
  type: "Query",
  definition(t) {
    t.field("version", {
      type: "String",
      description: "Server version",
      resolve: () => serverVersion,
    });
  },
});
