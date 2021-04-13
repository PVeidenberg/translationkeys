import { mutationField, stringArg } from "@nexus/schema";
import { TranslationEntity } from "../../entities/TranslationEntity";

export default mutationField("updateTranslation", {
  type: "Boolean",
  args: {
    id: stringArg(),
    translationValue: stringArg(),
  },
  description: "Updates excisting translation",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await TranslationEntity.createQueryBuilder("translation")
        .update()
        .set({ translationValue: args.translationValue })
        .where("id = :id", { id: args.id })
        .execute();
      console.log("result", result);
    } catch (err) {
      console.log("Updating translation failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
