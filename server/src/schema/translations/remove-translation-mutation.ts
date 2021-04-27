import { mutationField, stringArg } from "@nexus/schema";
import { TranslationEntity } from "../../entities/TranslationEntity";

export default mutationField("removeTranslation", {
  type: "Boolean",
  args: {
    id: stringArg(),
  },
  description: "Deletes excisting language",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await TranslationEntity.createQueryBuilder("language")
        .delete()
        .where("id = :id", { id: args.id })
        .execute();
      console.log("midagasdimuusd", result);
    } catch (err) {
      console.log("Delete language failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
