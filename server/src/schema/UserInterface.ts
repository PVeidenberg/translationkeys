import { interfaceType } from "@nexus/schema";

export default interfaceType({
  name: "UserInterface",
  definition(t) {
    t.id("id", { description: "User unique id" });
    t.string("email", { description: "User email address" });
    t.string("name", { description: "User name" });

    // TODO: implement
    // t.resolveType(user => (user.organizations !== undefined ? "Viewer" : "User"));
    t.resolveType(() => null);
  },
});
