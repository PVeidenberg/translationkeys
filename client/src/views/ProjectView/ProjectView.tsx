import * as React from "react";
import "./project-view.scss";
import { useProjectTranslationsQuery } from "../../schema";
import ProjectHeader from "../../components/projectHeader/projectHeader";
import TranslationsTable from "../../components/table/TranslationsTable";
import { gql } from "@apollo/client";

// get all projectTranslations query
gql`
  query ProjectTranslations($projectId: String!) {
    projectTranslations(projectId: $projectId) {
      id
      languageId
      translationkeyId
      translationValue
    }
    languages(projectId: $projectId) {
      id
      languageName
    }
    translationkeys(projectId: $projectId) {
      id
      translationkeyName
    }
  }
`;

export default function ProjectView(props: any) {
  const project = props.location.state;

  // attempt to get projectTranslations list
  const { data, loading, error } = useProjectTranslationsQuery({ variables: { projectId: project.id } });

  // handle error
  if (error) {
    // return <LandingView />;
  }

  // handle loading
  if (loading || !data) {
    //  return <SettingsView />;
  }

  return (
    <div className="view projects-view">
      {data ? (
        <div key={project.id}>
          <ProjectHeader projectInfo={project} />
          <div className="table-container">
            <TranslationsTable translations={data} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}{" "}
    </div>
  );
}
