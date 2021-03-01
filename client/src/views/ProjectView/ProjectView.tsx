import { gql } from "@apollo/client";
import * as React from "react";
import "./project-view.scss";
import { RouteComponentProps, Link, useHistory } from "react-router-dom";
import ProjectHeader from "../../components/projectHeader/projectHeader";
import TranslationsTable from "../../components/table/TranslationsTable";
import { FormEvent } from "react";
import { useQuery, useMutation } from "@apollo/client";
// import { PROJECT_VIEW_QUERY } from '../../queries';

interface QueryProps {
  id: string;
}

interface ProjectViewProps {
  id: string;
}

const PROJECT_VIEW_QUERY = gql`
  query ProjectView($id: ID!) {
    project(nodeId: $id) {
      nodeId
      id
      name
      languages: translationLanguagesByProjectId(orderBy: ID_ASC) {
        nodes {
          nodeId
          name
          id
        }
      }
      keys: translationKeysByProjectId {
        nodes {
          name
          id
          nodeId
          translation: translationsByTranslationKeyId(
            orderBy: TRANSLATION_LANGUAGE_ID_ASC
          ) {
            nodes {
              name
              id
              nodeId
              language: translationLanguageByTranslationLanguageId {
                name
                id
                nodeId
              }
            }
          }
        }
      }
    }
  }
`;

/*const ADD_KEY = gql`
	mutation AddKey($name: String!, $projectId: Int!) {
		createTranslationKey(input: { translationKey: { name: $name, projectId: $projectId } }) {
			translationKey {
				nodeId
				name
			}
		}
	}
`;

const ADD_LANGUAGE = gql`
	mutation AddLanguage($name: String!, $projectId: Int!) {
		createTranslationLanguage(input: { translationLanguage: { name: $name, projectId: $projectId } }) {
			translationLanguage {
				nodeId
				name
			}
		}
	}
`;*/
export default function ProjectView(props: any) {
    const history = useHistory();
     const { id, name } = props.location.state;
     //makeMockData

     // const { loading, error, data: projectViewState } = useQuery(PROJECT_VIEW_QUERY);

     // console.log(projectViewState);
     // const [addKey] = useMutation(ADD_KEY);
     // const [addLanguage] = useMutation(ADD_LANGUAGE);

  const handleAddKey = () => {
    // add key to table
  }

  const handleAddLanguage = () => {
    // add key to table
  }

  return (
    <div className="view projects-view">
       {props && props.project ? (
				<div key={props.project.nodeId}>
          <ProjectHeader/>
          <div className="table-container">
            <TranslationsTable languages={props.project.languages.nodes} keys={props.project.keys.nodes} />
        </div>  
				</div>
			) : (
				<p>Loading...</p>
			)} *
    </div>
  );
}
