import { mutationField, stringArg } from "@nexus/schema";
import { TranslationkeyEntity } from "../../entities/TranslationkeyEntity";

export default mutationField("removeTranslationKey", {
  type: "Boolean",
  args: {
    id: stringArg(),
  },
  description: "Deletes excisting translationkey",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await TranslationkeyEntity.createQueryBuilder("translationkey")
        .delete()
        .where("id = :id", { id: args.id })
        .execute();
      // console.log("result", result);
    } catch (err) {
      console.log("Delete translationkey failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
