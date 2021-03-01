import * as React from "react";
import { Link } from "react-router-dom";
import "./settings-view.scss";

const SettingsView = (props: any) => {
  const { nodeId } = props;

  return (
    <div className="project-name-container" key={nodeId}>
      <Link className="project-settings" to={`/project/${nodeId}`}>
        <p className="project-setting-link-text">Back to project</p>
      </Link>
    </div>
  );
};

export default SettingsView;
