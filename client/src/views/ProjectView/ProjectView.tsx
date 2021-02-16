import { gql } from "@apollo/client";
import * as React from "react";
import "./project-view.scss";
import { RouteComponentProps, Link } from "react-router-dom";
import TranslationsTable from "../../components/table/TranslationsTable";
import { FormEvent } from "react";
import { useQuery, useMutation } from "@apollo/client";
// import { PROJECT_VIEW_QUERY } from '../../queries';

interface QueryProps {
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
/*
const Header = styled.div`
  font-size: 24px;
  padding: 30px;
  background: #dfdfdf;

  a {
    color: dodgerblue;
    font-size: 16px;
    position: absolute;
    right: 30px;
    top: 36px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  form {
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 0 0 0;
  }

  input {
    padding: 4px;
    font-size: 18px;
    flex: 1;
    width: 100%;
  }

  button {
    margin-left: 10px;
    height: 100%;
    min-width: 150px;
    font-weight: bold;
  }
`;

const TableContainer = styled.div`
  overflow: auto;
  padding: 30px;
`;
*/
export default function ProjectView(props: any) {
  //   console.log(props);
  //   // const { loading, error, data: projectViewState } = useQuery(PROJECT_VIEW_QUERY);

  //   // console.log(projectViewState);
  //   // const [addKey] = useMutation(ADD_KEY);
  //   // const [addLanguage] = useMutation(ADD_LANGUAGE);

  /*const inputKey = React.useRef<HTMLInputElement>(null);
	const inputLanguage = React.useRef<HTMLInputElement>(null);

	function handleAddKey(addKeyFn: any, projectId: number | null, event: FormEvent) {
		event.preventDefault();

		if (inputKey.current !== null && inputKey.current.value !== '') {
			addKeyFn({
				refetchQueries: ['ProjectView'],
				variables: { name: inputKey.current.value, projectId },
			});
			inputKey.current.value = '';
		}
	}

	function handleAddLanguage(addLanguageFn: any, projectId: number | null, event: FormEvent) {
		event.preventDefault();

		if (inputLanguage.current !== null && inputLanguage.current.value !== '') {
			addLanguageFn({
				refetchQueries: ['ProjectView'],
				variables: { name: inputLanguage.current.value, projectId },
			});
			inputLanguage.current.value = '';
		}
	}*/

  return (
    <div className="view projects-view">
      {/* {data && data.project ? (
				<div key={data.project.nodeId}>
					<Header>
						<div>
							<span>Project: </span>
							<strong>{data.project.name}</strong>
							<a href={`${process.env.REACT_APP_SERVER_URL}/project/${data.project.id}`} target="_blank">
									Get JSON
								</a>
							<Link className="project-settings" to={`/project/settings`}>
								<p className="project-setting-link-text">Settings</p>
							</Link>
						</div>
						
						<Controls>
							<form onSubmit={handleAddKey.bind(null, addKey, data.project && data.project.id)}>
								<input ref={inputKey} />
								<button type="submit">Add Key</button>
							</form>

							<form onSubmit={handleAddLanguage.bind(null, addLanguage, data.project && data.project.id)}>
								<input ref={inputLanguage} />
								<button type="submit">Add Language</button>
							</form>
						</Controls>
					</Header>

					<TableContainer>
						<TranslationsTable languages={data.project.languages.nodes} keys={data.project.keys.nodes} />
					</TableContainer>
				</div>
			) : (
				<p>Loading...</p>
			)} */}
    </div>
  );
}
