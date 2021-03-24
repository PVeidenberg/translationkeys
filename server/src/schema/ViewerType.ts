import { objectType } from "@nexus/schema";

export default objectType({
  name: "Viewer",
  definition(t) {
    t.implements("UserInterface");
  },
});
