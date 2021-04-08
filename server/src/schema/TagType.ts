import { objectType } from "@nexus/schema";

export default objectType({
  name: "Tag",
  definition(t) {
    t.id("id");
    t.string("tagName");
  },
});
