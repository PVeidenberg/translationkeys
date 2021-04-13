import { mutationField, stringArg } from "@nexus/schema";
import { TranslationkeyEntity } from "../../entities/TranslationkeyEntity";

export default mutationField("addTranslationkey", {
  type: "Translationkey",
  args: {
    projectId: stringArg(),
    translationKeyName: stringArg(),
  },
  description: "Adds new translationkey",
  resolve: async (_parent, args, context) => {
    const translationkey = await TranslationkeyEntity.create({
      translationkeyName: args.translationKeyName,
      project: args.projectId,
    }).save();

    return translationkey;
  },
});
