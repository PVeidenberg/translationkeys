import { mutationField, stringArg } from "@nexus/schema";
import { TranslationkeyEntity } from "../../entities/TranslationkeyEntity";

export default mutationField("addTranslationkey", {
  type: "Translationkey",
  args: {
    translationkeyName: stringArg()
  },
  description: "Adds new translationkey",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;

    // check if project name already exists
    if (viewer.projects.some(project => project.projectName === args.projectName)) {
      throw new Error("Project name already exists");
    }

    const translationkey = TranslationkeyEntity.create({
      translationkeyName: args.translationkeyName
    });

    viewer.translations.push(translationkey);
    await viewer.save()

    return translationkey;
  },
});
