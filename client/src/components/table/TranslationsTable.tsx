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
  // console.log(translations);
  // console.log(translations["projectTranslations"].length === 0);
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
            <>
              <th key={0}>Key</th>
              {translations &&
                translations["languages"].map(({ id, languageName }: any) => {
                  return (
                    <th key={id}>
                      <TranslationLanguage translationLanguage={languageName} translationId={id} />
                    </th>
                  );
                })}
            </>
          </tr>
        </tbody>
        <tbody>
          {translations &&
            translations["translationkeys"].map(({ id, translationkeyName }: any) => {
              return renderRow(translationkeyName, id, translations["projectTranslations"], translations["languages"]);
            })}
        </tbody>
      </table>
    </div>
  );
}

const renderRow = (translationkeyName: string, translationKeyd: string, projectTranslations: any, languages: any) => {
  if (!translationkeyName) {
    return null;
  }

  return (
    <tr key={translationkeyName}>
      <td>
        <TranslationKey translationKey={translationkeyName} translationKeyId={translationKeyd} />
      </td>
      {languages.map((language: any) => {
        const value = projectTranslations.find(
          ({ languageId, translationkeyId }: any) => languageId === language.id && translationkeyId === translationKeyd,
        );

        if (!value) {
          return (
            <td>
              <div className="translation-container">
                <Translation />
              </div>
            </td>
          );
        }

        return (
          <td key={value.id}>
            <div className="translation-container">
              <Translation translationValue={value.translationValue} />
            </div>
          </td>
        );
      })}
    </tr>
  );
};
