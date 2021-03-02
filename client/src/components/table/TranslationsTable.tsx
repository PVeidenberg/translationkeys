import * as React from "react";
 import Translation from "../translation/Translation";
 import TranslationKey  from "../translationKey/TranslationKey";
 import TranslationLanguage from "../translationLanguage/TranslationLanguage";
 import "./translation-table.scss";

// interface TableProps {
// 	languages: Array<string | null>;
// 	keys: Array<string| null>;
// }

export default function TranslationsTable(props: any) {
   const { languages, keys } = props;

  if (!languages || !keys) {
    return null;
  }

  return (
    <div className="styled-table">
      <thead>
        <tr>
          <th key={0}>Key</th>
          {languages.map(
            (lang: any) =>
              lang && (
                <th key={lang.nodeId}>
                  <TranslationLanguage translationLanguage={lang.language} />
                </th>
              )
          )}
        </tr>
      </thead>
      <tbody>{keys.map((key: any) => renderRow(key.key, languages))}</tbody>
    </div>
  );
};

const renderRow = (
  key: any | null,
  languages: Array<any | null>
) => {
  if (!key) {
    return null;
  }

  return (
    <tr key={key}>
      <td>
        <TranslationKey translationKey={key} />
      </td>
      {languages.map((lang, index) => (
        <td key={index}>
          <div className="translation-container">
            <Translation
              translations={key}
              language={lang.language}
              keyId={key}
            />
          </div>
        </td>
      ))}
    </tr>
  );
};
