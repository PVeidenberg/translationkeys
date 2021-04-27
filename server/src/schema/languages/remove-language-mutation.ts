import { mutationField, stringArg } from "@nexus/schema";
import { LanguageEntity } from "../../entities/LanguageEntity";

export default mutationField("removeLanguage", {
  type: "Boolean",
  args: {
    id: stringArg(),
  },
  description: "Deletes excisting language",
  resolve: async (_parent, args, context) => {
    console.log("removeLanguage");
    const { viewer } = context;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      const result = await LanguageEntity.createQueryBuilder("language")
        .delete()
        .where("id = :id", { id: args.id })
        .execute();

      if (result.affected && result.affected > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("Delete language failed", err);
      return false;
    }
  },
});
