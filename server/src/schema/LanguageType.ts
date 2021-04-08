import { objectType } from "@nexus/schema";

export default objectType({
  name: "Language",
  definition(t) {
    t.id("id");
    t.string("languageName");
  },
});