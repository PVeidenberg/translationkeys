import { queryField } from "@nexus/schema";
import { ProjectEntity } from "../../entities/ProjectEntity";

export default queryField("projects", {
  type: "Project",
  list: true,
  description: "Queries all projects",
  resolve: (_parent, _args, context) => {
    const { viewer } = context;

    return ProjectEntity.createQueryBuilder("project")
    .innerJoin("project.users", "user")
    .where("user.id = :userId", { userId: viewer.id })
    .getMany();
  },
});
