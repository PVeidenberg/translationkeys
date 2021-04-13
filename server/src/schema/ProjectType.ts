import { objectType } from "@nexus/schema";
import { In } from "typeorm";
import { TranslationEntity } from "../entities/TranslationEntity";
import { TranslationkeyEntity } from "../entities/TranslationkeyEntity";
import { getRootTypingImport } from "../services/getRootTypingImport";

export default objectType({
  name: "Project",
  rootTyping: getRootTypingImport("ProjectEntity"),
  definition(t) {
    t.id("id");
    t.string("projectName");
    t.list.field("translations", {
      type: "Translation",
      resolve: async (project, _args, _context) => {
        const translationKeyIdEntities = await TranslationkeyEntity.find({
          where: {
            projectId: project.id,
          },
        });

        const translationKeyIds = translationKeyIdEntities.map((translationKeyIdEntity) => translationKeyIdEntity.id);

        return TranslationEntity.find({
          where: {
            translationkeyId: In(translationKeyIds),
          },
        });
      },
    });
  },
});
