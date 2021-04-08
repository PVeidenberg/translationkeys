import React, { useState } from "react";
import "./projects-view.scss";
import Header from "../../components/header/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useProjectsQuery, useAddProjectMutation } from "../../schema";
import { Field } from "../../components/Field/Field";
// import { useProjectsQuery, useAddProjectMutation } from "../../schema";
import ProjectNameContainer from "../../components/projectNameContainer/ProjectNameContainer";
import { gql } from "@apollo/client";
import Paths from "../../Paths";

interface ProjectsFormValues {
  projectName: string;
}

// get all projects query
gql`
  query projects {
    projects {
      id
      projectName
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
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm<ProjectsFormValues>();

  // attempt to get projects list
  const { data, loading, error } = useProjectsQuery();

  // // handle error
  if (error) {
    // return <LandingView />;
  }

  // handle loading
  if (loading || !data) {
    //  return <SettingsView />;
  }

  // setup login mutation
  const [addProject, addProjectResult] = useAddProjectMutation({
    refetchQueries: ["projects"],
    awaitRefetchQueries: true,
  });

  // addproject on submit
  const onSubmit: SubmitHandler<ProjectsFormValues> = async ({ projectName }) => {
    console.log(projectName);
    const response = await addProject({
      variables: { projectName },
    });
  };

  return (
    <div className="view projects-view">
      <Header />
      <div className="projects-title">Projects</div>
      <form className="projects-input-container" onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          id="name"
          name="name"
          label=""
          defaultValue=""
          error={errors.projectName}
          register={register}
        />
        <input className="projects-input-button" type="submit" value="Add Project" />
      </form>
      {data &&
        data.projects.map((project: any, index: number) => {
          console.log(project.id);
          console.log(index);
          if (!project) {
            return;
          }
          return <ProjectNameContainer key={project.id} project={project} index={index} />;
        })}
    </div>
  );
}
