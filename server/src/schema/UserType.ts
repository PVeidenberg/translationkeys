import { objectType } from "@nexus/schema";

export default objectType({
  name: "User",
  definition(t) {
    t.implements("UserInterface");
  },
});
