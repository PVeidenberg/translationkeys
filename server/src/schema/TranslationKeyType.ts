import { objectType } from "@nexus/schema";

export default objectType({
  name: "Translationkey",
  definition(t) {
    t.id("id");
    t.string("translationkeyName");
  },
});
