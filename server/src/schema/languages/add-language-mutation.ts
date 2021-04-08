import { mutationField, stringArg } from "@nexus/schema";
import { LanguageEntity } from "../../entities/LanguageEntity";

export default mutationField("addProject", {
  type: "Project",
  args: {
    languageName: stringArg()
  },
  description: "Adds new project",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;

    // check if project name already exists
    if (viewer.projects.some(project => project.projectName === args.projectName)) {
      throw new Error("Project name already exists");
    }

    const project = LanguageEntity.create({
        languageName: args.languageName
    });

    viewer.projects.push(project);
    await viewer.save()

    return project;
  },
});
