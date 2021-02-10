import { queryType } from "@nexus/schema";

// empty root resolver extended by other resolvers
export default queryType({
  definition(_t) {
    // search for resolvers where extendType({ type: "Query", ... })
  },
});
