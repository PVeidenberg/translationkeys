import { queryField, stringArg } from "@nexus/schema";
import { TranslationEntity } from "../../entities/TranslationEntity";

export default queryField("translations", {
  type: "Translation",
  list: true,
  args: {
    languageId: stringArg(),
    translationkeyId: stringArg()
  },
  description: "Queries all translations",
  resolve: (_parent, args, context) => {

    return TranslationEntity.createQueryBuilder("translation")
    .innerJoin("translation.language", "languages")
    .innerJoin("translation.translationkey", "translationkeys")
    .where("languages.id = :languageId", { languageId: args.languageId })
    .andWhere("translationkeys.id = :translationkeyId", { translationkeyId: args.translationkeyId })
    .getMany();
  },
});
