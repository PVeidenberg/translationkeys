import React from "react";
import "./projects-view.scss";
import Header from "../../components/header/Header";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useHistory } from "react-router-dom";
import { useProjectsQuery, useAddProjectMutation } from "../../schema";
import { Field } from "../../components/Field/Field";
import { validateMinimumLength } from "../../validators/validateMinimumLength";
import ProjectNameContainer from "../../components/projectNameContainer/ProjectNameContainer";
import { gql } from "@apollo/client";

interface ProjectsFormValues {
  name: string;
}

// get all projects query
gql`
  query Projects {
    projects {
      id
      projectName
      apiKey
    }
  }
`;

// add-projects mutation (generates useLoginMutation hook)
gql`
  mutation addProject($projectName: String!) {
    addProject(projectName: $projectName) {
      id
    }
  }
`;

export default function ProjectsView(props: any) {
  // const history = useHistory();
  const { register, handleSubmit, errors } = useForm<ProjectsFormValues>();

  // attempt to get projects list
  const { data, loading, error } = useProjectsQuery();

  console.log("data", data);

  // // handle error
  if (error) {
    // return <LandingView />;
  }

  // handle loading
  if (loading || !data) {
    //  return <SettingsView />;
  }

  // setup addProject mutation
  const [addProject, addProjectResult] = useAddProjectMutation({
    refetchQueries: ["Projects"],
    awaitRefetchQueries: true,
  });

  // addproject on submit
  const onSubmit: SubmitHandler<ProjectsFormValues> = async ({ name }) => {
    const response = await addProject({
      variables: { projectName: name },
    });
  };

  return (
    <div className="view projects-view">
      <Header />
      <div className="projects-title">Projects</div>
      <form className="projects-input-container" onSubmit={handleSubmit(onSubmit)}>
        <Field
          className="projects-add-field"
          type="text"
          name="name"
          label=""
          projects={true}
          defaultValue=""
          error={errors.name}
          register={register({ validate: validateMinimumLength(1) })}
        />
        <input className="projects-input-button" type="submit" value="Add Project" />
      </form>
      {data &&
        data.projects.map((project: any, index: number) => {
          if (!project) {
            return;
          }
          return <ProjectNameContainer key={project.id} project={project} index={index} />;
        })}
    </div>
  );
}
