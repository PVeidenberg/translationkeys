import { mutationField, stringArg } from "@nexus/schema";
import { TranslationEntity } from "../../entities/TranslationEntity";

export default mutationField("addTranslation", {
  type: "Translation",
  args: {
    languageId: stringArg(),
    translationkeyId: stringArg(),
    translationValue: stringArg(),
  },
  description: "Adds new translation",
  resolve: async (_parent, args, context) => {
    const translation = await TranslationEntity.create({
      translationValue: args.translationValue,
      translationkeyId: args.translationkeyId,
      languageId: args.languageId,
    }).save();

    return translation;
  },
});
