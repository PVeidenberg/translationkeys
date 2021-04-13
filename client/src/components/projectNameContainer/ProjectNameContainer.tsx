import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./project-name-container.scss";
import { useRemoveProjectMutation } from "../../schema";
import { gql } from "@apollo/client";

// add-projects mutation (generates useLoginMutation hook)
gql`
  mutation RemoveProject($id: String!) {
    removeProject(id: $id)
  }
`;

export default function ProjectNameContainer(props: { project: any; index: number }) {
  const [isDeletingOpened, setIsDeletingOpened] = useState(false);

  // setup removeProject mutation
  const [removeProject, removeProjectResult] = useRemoveProjectMutation({
    refetchQueries: ["Projects"],
    awaitRefetchQueries: true,
  });

  const { projectName, id } = props.project;
  const { index } = props;

  const handleDeleteProject = async (e: any) => {
    e.preventDefault();
    const response = await removeProject({
      variables: { id },
    });
  };

  const deletingButtons = (
    <div className="projects-delete-modal">
      <div className="projects-delete-buttons">
        <button
          onClick={(e) => {
            setIsDeletingOpened(false);
          }}
        >
          Close
        </button>
        <button onClick={(e) => handleDeleteProject(e)}>Delete Project</button>
      </div>
    </div>
  );

  return (
    <div className="project-name-container" key={index}>
      <Link className="project-name-link" to={{ pathname: `/project/${projectName}`, state: props.project }}>
        <p className="project-name-link-text">{projectName}</p>
      </Link>

      <div className="delete-button">
        {isDeletingOpened ? deletingButtons : <div onClick={() => setIsDeletingOpened(true)}>&times;</div>}
      </div>
    </div>
  );
}
