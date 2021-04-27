import * as React from "react";
import "./project-header.scss";
import { gql } from "@apollo/client";
import { useLogoutMutation, useAddTranslationkeyMutation, useAddLanguageMutation } from "../../schema";
import { useHistory, useLocation } from "react-router-dom";
import Paths from "../../Paths";

// logout mutation (generates useLogoutMutation hook)
gql`
  mutation Logout {
    logout
  }
`;

// add-key mutation (generates useAddKeyMutation hook)
gql`
  mutation AddTranslationkey($projectId: String!, $translationKeyName: String!) {
    addTranslationkey(projectId: $projectId, translationKeyName: $translationKeyName) {
      id
    }
  }
`;

// add-language mutation (generates useAddLanguageMutation hook)
gql`
  mutation AddLanguage($projectId: String!, $languageName: String!) {
    addLanguage(projectId: $projectId, languageName: $languageName) {
      id
    }
  }
`;

// logout mutation (generates useLogoutMutation hook)
gql`
  mutation Logout {
    logout
  }
`;

export default function Header(props: any) {
  const { id, projectName, apiKey } = props.projectInfo;
  console.log("apikey", apiKey);

  const [logout, logoutResult] = useLogoutMutation({
    refetchQueries: ["Viewer"],
    awaitRefetchQueries: true,
  });

  const history = useHistory();

  // setup addKey mutation
  const [addTranslationkey, _] = useAddTranslationkeyMutation({
    refetchQueries: ["ProjectTranslations"],
    awaitRefetchQueries: true,
  });

  // setup addLanguage mutation
  const [addLanguage, addLanguageResult] = useAddLanguageMutation({
    refetchQueries: ["ProjectTranslations"],
    awaitRefetchQueries: true,
  });

  const handleAddKey = async () => {
    // add key to table
    await addTranslationkey({
      variables: { projectId: id, translationKeyName: "translationkey.default" },
    });
  };

  const handleAddLanguage = async () => {
    // add language to table
    await addLanguage({
      variables: { projectId: id, languageName: "languageDefault" },
    });
  };

  const handleLogout = async () => {
    const response = await logout();

    if (response.data) {
      history.push(Paths.landing);
    }
  };

  const handleToSettingsView = () => {
    history.push({ pathname: `/project/${projectName}/settings`, state: apiKey });
  };

  return (
    <div className="project-header-container">
      <div>
        <span>Project: </span>
        <strong>{projectName}</strong>
      </div>
      <div>
        <div className="controls">
          <button onClick={() => handleAddKey()}>Add Key</button>
          <button onClick={() => handleAddLanguage()}>Add Language</button>
          <button onClick={() => handleToSettingsView()}>SETTINGS</button>
          <button onClick={() => handleLogout()}>LOG OUT</button>
        </div>
      </div>
    </div>
  );
}
