import { mutationField, stringArg } from "@nexus/schema";
import { ProjectEntity } from "../../entities/ProjectEntity";

export default mutationField("updateProject", {
  type: "Boolean",
  args: {
    id: stringArg(),
    projectName: stringArg(),
  },
  description: "Updates excisting project",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await ProjectEntity.createQueryBuilder("project")
        .update()
        .set({ projectName: args.projectName })
        .where("id = :id", { id: args.id })
        .execute();
    } catch (err) {
      console.log("Updating project failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
