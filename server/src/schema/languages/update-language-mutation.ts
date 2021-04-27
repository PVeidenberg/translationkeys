import { mutationField, stringArg } from "@nexus/schema";
import { LanguageEntity } from "../../entities/LanguageEntity";

export default mutationField("updateLanguage", {
  type: "Boolean",
  args: {
    id: stringArg(),
    languageName: stringArg(),
  },
  description: "Updates excisting Language",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;
    let result;

    if (!viewer) {
      throw new Error("Not authenticated!!");
    }

    try {
      result = await LanguageEntity.createQueryBuilder("language")
        .update()
        .set({ languageName: args.languageName })
        .where("id = :id", { id: args.id })
        .execute();
      // console.log("result", result);
    } catch (err) {
      console.log("language update failed", err);
    }

    if (result["affected"] > 0) {
      return true;
    } else {
      return false;
    }
  },
});
