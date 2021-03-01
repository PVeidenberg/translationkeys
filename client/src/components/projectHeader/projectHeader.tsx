import * as React from "react";
import "./project-header.scss";
import { useMutation } from "@apollo/client";
import { useHistory, useLocation, Redirect, Link } from "react-router-dom";
import Paths from "../../Paths";

export default function Header(props: any) {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="project-header-container">
        <span>Project: </span>
        <strong>{props.project.name}</strong>
        <a href={`${process.env.REACT_APP_SERVER_URL}/project/${props.project.id}`} target="_blank">
                Get JSON
            </a>
        <Link className="project-settings" to={`/project/settings`}>
            <p className="project-setting-link-text">Settings</p>
        </Link>
        <div className="controls">
            {/* <form onSubmit={handleAddKey.bind(null, addKey, data.project && data.project.id)}>
                <input ref={inputKey} />
                <button type="submit">Add Key</button>
            </form>

            <form onSubmit={handleAddLanguage.bind(null, addLanguage, data.project && data.project.id)}>
                <input ref={inputLanguage} />
                <button type="submit">Add Language</button>
            </form> */}
        </div>
    </div>
  );
}
