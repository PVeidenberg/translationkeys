import { mutationField, stringArg } from "@nexus/schema";
import { TranslationkeyEntity } from "../../entities/TranslationkeyEntity";

export default mutationField("updateTranslationkey", {
  type: "Boolean",
  args: {
    id: stringArg(),
    translationkeyName: stringArg(),
  },
  description: "Updates excisting project",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await TranslationkeyEntity.createQueryBuilder("translationkey")
        .update()
        .set({ translationkeyName: args.translationkeyName })
        .where("id = :id", { id: args.id })
        .execute();
      console.log("result", result);
    } catch (err) {
      console.log("Translationkey project failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
