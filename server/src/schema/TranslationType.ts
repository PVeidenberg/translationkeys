import { objectType } from "@nexus/schema";

export default objectType({
  name: "Translation",
  definition(t) {
    t.id("id");
    t.id("languageId");
    t.id("translationkeyId");
    t.string("translationValue");
  },
});
