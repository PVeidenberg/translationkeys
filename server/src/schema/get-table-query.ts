import { queryField, stringArg } from "@nexus/schema";
import { In } from "typeorm";
import { TranslationEntity } from "../entities/TranslationEntity";
import { TranslationkeyEntity } from "../entities/TranslationkeyEntity";

export default queryField("projectTranslations", {
  type: "Translation",
  list: true,
  args: {
    projectId: stringArg(),
  },
  description: "Queries all translations",
  resolve: async (_parent, args, context) => {
    const translationKeyIdEntities = await TranslationkeyEntity.find({
      where: {
        projectId: args.projectId,
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
