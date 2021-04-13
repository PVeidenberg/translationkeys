import { queryField, stringArg } from "@nexus/schema";
import { TranslationEntity } from "../../entities/TranslationEntity";

export default queryField("translations", {
  type: "Translation",
  list: true,
  args: {
    languageId: stringArg(),
    translationkeyId: stringArg(),
  },
  description: "Queries all translations",
  resolve: (_parent, args, context) => {
    return TranslationEntity.find({
      where: {
        languageId: args.languageId,
        translationkeyId: args.translationkeyId,
      },
    });
  },
});
