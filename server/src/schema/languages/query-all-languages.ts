import { queryField, stringArg } from "@nexus/schema";
import { LanguageEntity } from "../../entities/LanguageEntity";

export default queryField("languages", {
  type: "Language",
  list: true,
  args: {
      projectId: stringArg()
  },
  description: "Queries all languages",
  resolve: (_parent, args, context) => {

    return LanguageEntity.createQueryBuilder("language")
    .innerJoin("language.project", "projects")
    .where("projects.id = :projectId", { projectId: args.projectId })
    .getMany();
  },
});
