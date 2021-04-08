import { mutationField, stringArg } from "@nexus/schema";

export default mutationField("updateProject", {
  type: "Boolean",
  args: {
      id: stringArg(),
      projectName: stringArg()
  },
  description: "Updates project name",
  resolve: async (_parent, args, context) => {
    const { viewer } = context;

    viewer.projects.some(project => {
        if (project.id === args.id) {
            project.projectName === args.projectName
            return true;
        }
    })

    await viewer.save()

   return false;
  },
});
