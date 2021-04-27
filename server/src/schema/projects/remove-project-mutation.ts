import { mutationField, stringArg } from "@nexus/schema";
import { ProjectEntity } from "../../entities/ProjectEntity";

export default mutationField("removeProject", {
  type: "Boolean",
  args: {
    id: stringArg(),
  },
  description: "Deletes excisting project",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await ProjectEntity.createQueryBuilder("project").delete().where("id = :id", { id: args.id }).execute();
      // console.log("result", result);
    } catch (err) {
      console.log("Delete project failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
