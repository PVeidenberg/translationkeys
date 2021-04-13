import { queryField, stringArg } from "@nexus/schema";
import { TranslationkeyEntity } from "../../entities/TranslationkeyEntity";

export default queryField("translationkeys", {
  type: "Translationkey",
  list: true,
  args: {
    projectId: stringArg(),
  },
  description: "Queries all translationkeys",
  resolve: (_parent, args, context) => {
    return TranslationkeyEntity.find({
      where: {
        projectId: args.projectId,
      },
    });

    // return TranslationkeyEntity.createQueryBuilder("key")
    // .innerJoin("key.project", "projects")
    // .where("projects.id = :projectId", { projectId: args.projectId })
    // .getMany();
  },
});
