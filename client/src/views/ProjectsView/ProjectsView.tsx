import React, { useState } from "react";
import "./projects-view.css";
import Header from "../../components/header/Header";
import { FormEvent } from "react";
import ProjectNameContainer from "../../components/project-name-container/ProjectNameContainer";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { Redirect } from "react-router-dom";
import Paths from "../../Paths";

export default function ProjectsView(props: any) {
  const [projectName, setProjectName] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("handleSubmitProjectsView");
    setProjectName("");
  }

  return (
    <div className="view projects-view">
      <Header />
      <div className="projects-title">Projects</div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="projects-input-container"
      >
        <input
          placeholder="Enter project name..."
          className="projects-input-field"
          type="text"
          id="name"
          name="name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button className="projects-input-button" type="submit">
          Add Project
        </button>
      </form>
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
