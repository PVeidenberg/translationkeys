import { mutationField, stringArg } from "@nexus/schema";
import { LanguageEntity } from "../../entities/LanguageEntity";

export default mutationField("removeLanguage", {
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
      result = await LanguageEntity.createQueryBuilder("language")
        .delete()
        .where("id = :id", { id: args.id })
        .execute();
      console.log("result", result);
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
