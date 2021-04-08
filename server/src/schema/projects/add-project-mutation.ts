import { mutationField, stringArg } from "@nexus/schema";
import { ProjectEntity } from "../../entities/ProjectEntity";

export default mutationField("addProject", {
  type: "Project",
  args: {
    projectName: stringArg()
  },
  description: "Adds new project",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;

    // check if project name already exists
    if (viewer.projects.some(project => project.projectName === args.projectName)) {
      throw new Error("Project name already exists");
    }

    const project = ProjectEntity.create({
        projectName: args.projectName
    });

    viewer.projects.push(project);
    await viewer.save()

    return project;
  },
});
