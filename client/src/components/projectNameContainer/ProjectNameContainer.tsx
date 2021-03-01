import * as React from "react";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import "./project-name-container.scss";
import { useMutation } from "@apollo/client";

export default function ProjectNameContainer(props: { project: any, index: number }) {
  const [isDeletingOpened, setIsDeletingOpened] = useState(false);

  const { name, id } = props.project;
  const { index } = props;

  const handleDeleteProject = (projectName: string, e:any) => {
    e.preventDefault();

  }

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
        <button onClick={(e) => handleDeleteProject(name, e)}>
          Delete Project
        </button>
      </div>
    </div>
  );

  return (
    <div className="project-name-container" key={index}>
      <Link
        className="project-name-link"
        to={{ pathname: `/project/${name}`, state: props.project  }}
      >
        <p className="project-name-link-text">{name}</p>
      </Link>

      <div className="delete-button">
        {isDeletingOpened ? (
          deletingButtons
        ) : (
          <div onClick={() => setIsDeletingOpened(true)}>&times;</div>
        )}
      </div>
    </div>
  );
}
