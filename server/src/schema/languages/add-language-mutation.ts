import { mutationField, stringArg } from "@nexus/schema";
import { LanguageEntity } from "../../entities/LanguageEntity";

export default mutationField("addLanguage", {
  type: "Language",
  args: {
    projectId: stringArg(),
    languageName: stringArg(),
  },
  description: "Adds new language",
  resolve: async (_parent, args, context) => {
    const language = await LanguageEntity.create({
      languageName: args.languageName,
      project: args.projectId,
    }).save();

    return language;
  },
});
