import * as React from "react";
// import Translation from "../translation/Translation";
// import TranslationKey from "../translation-key/TranslationKey";
// import TranslationLanguage from "../translation-language/TranslationLanguage";
/*
const StyledTable = styled.table`
  border-collapse: collapse;
  height: 100%;

  th,
  td {
    border: 1px solid #dfdfdf;
  }

  th {
    padding: 10px;
    background-color: #dfdfdf;
    text-align: left;
  }

  tr > td:first-child {
    background-color: #f4f4f4;
  }
`;

const TranslationContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

interface TableProps {
	languages: Array<ProjectView_project_languages_nodes | null>;
	keys: Array<ProjectView_project_keys_nodes | null>;
}
*/
const TranslationsTable = (props: any) => {
  /* const { languages, keys } = props;

  if (!languages || !keys) {
    return null;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th key={0}>Key</th>
          {languages.map(
            (lang: any) =>
              lang && (
                <th key={lang.nodeId}>
                  <TranslationLanguage translationLanguage={lang} />
                </th>
              )
          )}
        </tr>
      </thead>
      <tbody>{keys.map((key: a) => renderRow(key, languages))}</tbody>
    </StyledTable>
  );*/
};

// const renderRow = (
//   key: ProjectView_project_keys_nodes | null,
//   languages: Array<ProjectView_project_languages_nodes | null>
// ) => {
//   if (!key) {
//     return null;
//   }

//   return (
//     <tr key={key.name}>
//       <td>
//         <TranslationKey translationKey={key} />
//       </td>
//       {languages.map((language, index) => (
//         <td key={index}>
//           <TranslationContainer>
//             <Translation
//               translations={key.translation.nodes}
//               language={language}
//               keyId={key.id}
//             />
//           </TranslationContainer>
//         </td>
//       ))}
//     </tr>
//   );
// };

export default TranslationsTable;
