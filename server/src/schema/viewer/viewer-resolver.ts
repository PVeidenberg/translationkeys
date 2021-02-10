import { extendType } from "@nexus/schema";
import { UserEntity } from "../../entities/UserEntity";

export default extendType({
  type: "Query",
  definition(t) {
    t.field("viewer", {
      type: "String",
      description: "Logged in user",
      nullable: true,
      resolve: (_parent, _args, context) => {
        // return null if not logged in
        if (!context.viewer) {
          return null;
        }

        // prime logged in user data-loader cache
        context.loader(UserEntity).prime(context.viewer.id, context.viewer);

        // return logged in user
        return context.viewer;
      },
    });
  },
});
