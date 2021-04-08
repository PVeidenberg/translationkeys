import { objectType } from "@nexus/schema";

export default objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.string("projectName");
  },
});
