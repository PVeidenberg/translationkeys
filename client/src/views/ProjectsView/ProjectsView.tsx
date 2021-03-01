import React, { useState } from "react";
import "./projects-view.scss";
import Header from "../../components/header/Header";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ProjectNameContainer from "../../components/projectNameContainer/ProjectNameContainer";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { Redirect } from "react-router-dom";
import Paths from "../../Paths";

interface ProjectsFormValues {
  projectName: string;
}

export default function ProjectsView(props: any) {
  const history = useHistory();
  const mockData = [{id: 1, name: "Smart-ID"}, {id: 2, name: "DagCoin"}]

  const { register, handleSubmit, errors, watch } = useForm<ProjectsFormValues>();
  const onSubmit = (data: any) => {
    history.push(Paths.projects);
    console.log(data);
  }

  /*async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("handleSubmitProjectsView");
    setProjectName("");
  }*/

  return (
    <div className="view projects-view">
      <Header />
      <div className="projects-title">Projects</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="projects-input-container"
      >
        <input
          placeholder="Enter project name..."
          className="projects-input-field"
          type="text"
          id="name"
          name="name"
          defaultValue=""
          ref={register}
        />

        <button className="projects-input-button" type="submit">
          Add Project
        </button>
      </form>
      {
        mockData.map((project:any, index:number) => {
          if (!project) {
            return;
          }
          return <ProjectNameContainer key={project.id} project={project} index={index} />;
        })
      }
      {/* {getAllProjectsState && getAllProjectsState.getAllProjects ? (
				getAllProjectsState.getAllProjects.map((project: any) => {
					if (!project) {
						return;
					}
					console.log(project.id);
					return <ProjectNameContainer key={project.id} project={project} />;
				})
			) : (
				<p> Loading...</p>
			)}{' '} */}
    </div>
  );
}
