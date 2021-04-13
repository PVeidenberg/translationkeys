import { mutationField, stringArg } from "@nexus/schema";
import { UnauthorizedError } from "../../../validate";
import { ProjectEntity } from "../../entities/ProjectEntity";

export default mutationField("addProject", {
  type: "Project",
  args: {
    projectName: stringArg(),
  },
  description: "Adds new project",
  authorize: (_parent, _args, context) => context.isLoggedIn(),
  resolve: async (_parent, args, { viewer }) => {
    if (!viewer) {
      throw new UnauthorizedError();
    }

    // check if project name already exists
    if (viewer.projects.some((project) => project.projectName === args.projectName)) {
      throw new Error("Project name already exists");
    }

    const project = ProjectEntity.create({
      projectName: args.projectName,
    });

    viewer.projects.push(project);
    await viewer.save();

    return project;
  },
});
