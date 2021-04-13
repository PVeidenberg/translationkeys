import * as React from "react";
import { ProjectTranslationsQuery } from "../../schema";
import Translation from "../translation/Translation";
import TranslationKey from "../translationKey/TranslationKey";
import TranslationLanguage from "../translationLanguage/TranslationLanguage";
import "./translation-table.scss";

interface TableProps {
  translations: ProjectTranslationsQuery;
}

export default function TranslationsTable(props: TableProps) {
  const { translations } = props;
  // console.log("projectTranslations", translations["projectTranslations"]);
  // console.log("projectlanguages", translations["languages"]);
  // console.log("projecttranslationkeys", translations["translationkeys"]);

  if (!translations) {
    return null;
  }

  return (
    <div className="styled-table">
      <table>
        <tbody>
          <tr>
            <th key={0}>Key</th>
            {translations &&
              translations["languages"].map(({ id, languageName }: any) => {
                return (
                  <th key={id}>
                    <TranslationLanguage translationLanguage={languageName} />
                  </th>
                );
              })}
          </tr>
        </tbody>
        <tbody>
          {translations &&
            translations["translationkeys"].map(({ id, translationkeyName }: any) => {
              return renderRow(translationkeyName, translations["projectTranslations"], translations["languages"]);
            })}
        </tbody>
      </table>
    </div>
  );
}

const renderRow = (translationkeyName: string, projectTranslations: any, languages: any) => {
  if (!translationkeyName) {
    return null;
  }

  return (
    <tr key={translationkeyName}>
      <td>
        <TranslationKey translationKey={translationkeyName} />
      </td>
      {projectTranslations.map(({ id, languageId, translationValue, translationkeyId }: any) => {
        return (
          <td key={id}>
            <div className="translation-container">
              <Translation
                translationValue={translationValue} /*languageId={id} translationkeyId={translationkeyId}*/
              />
            </div>
          </td>
        );
      })}
    </tr>
  );
};
