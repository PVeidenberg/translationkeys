import * as React from "react";
import "./project-header.scss";
import { useMutation } from "@apollo/client";
import { useHistory, useLocation, Redirect, Link } from "react-router-dom";
import Paths from "../../Paths";

export default function Header(props: any) {
    const { name, nodeId } = props.project;
    const history = useHistory();
    const location = useLocation();

    const handleAddKey = () => {
        // add key to table
      }
    
    const handleAddLanguage = () => {
    // add key to table
    }

    const handleGETJSON = () => {
        // add GET JSON data
    }

    const handleToSettingsView = () => {
        history.push({pathname: `/project/${name}/settings`});
    }

    return (
        <div className="project-header-container">
            <div>
                <span>Project: </span>
                <strong>{name}</strong>
            </div>
            <div>
                <div className="controls">
                {/* <a className="projects-input-button" href={`${process.env.REACT_APP_SERVER_URL}/project/${nodeId}`} target="_blank">
                    Get JSON
                </a> */}
                {/* <Link className="settings-button" to={`/project/settings`}>
                    <p className="settings-button">Settings</p>
                </Link> */}
                    {/* <input ref={inputKey} /> */}
                <button onClick={() => handleAddKey()} >Add Key</button>
                <button onClick={() => handleAddLanguage()}>Add Language</button>
                <button onClick={() => handleGETJSON()}>GET JSON</button>
                <button onClick={() => handleToSettingsView()}>SETTINGS</button>
                </div>
            </div>
        </div>
    );
}
