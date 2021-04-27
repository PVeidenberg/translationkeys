import { useState } from "react";
import * as React from "react";
import "./translation-language.scss";
import { gql } from "@apollo/client";
import { useRemoveLanguageMutation } from "../../schema";

interface StyledTranslationlanguageProps {
  isNotSaved?: boolean;
}

interface TranslationLanguage {
  translationLanguage: string;
  translationId: string;
}

// removeLanguage mutation (generates useRemoveLanguageMutation hook)
gql`
  mutation RemoveLanguage($id: String!) {
    removeLanguage(id: $id)
  }
`;

export default function TranslationLanguage(props: TranslationLanguage) {
  const { translationLanguage, translationId } = props;

  const initialValue = translationLanguage;
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);
  const isNotSaved = initialValue !== currentValue;

  // setup addProject mutation
  const [removeLanguage, removeLanguageResult] = useRemoveLanguageMutation({
    refetchQueries: ["ProjectTranslations"],
    awaitRefetchQueries: true,
  });

  if (!translationLanguage) {
    return null;
  }

  const handleUpdateLanguage = async (e: any) => {
    e.preventDefault();
    console.log("adasddas");
    await removeLanguage({
      variables: { id: translationId },
    });
  };

  const handleDeleteLanguage = async (e: any) => {
    e.preventDefault();
    console.log("adasddas");
    await removeLanguage({
      variables: { id: translationId },
    });
  };

  let ref: any = {};

  return (
    <div className="translation-language-container">
      <div>
        <div
          className="styled-translation-language"
          ref={(el: any) => {
            ref = el;
          }}
          contentEditable={isActive}
          suppressContentEditableWarning={true}
          onClick={(e: any) => {
            setIsActive(true);
          }}
          onKeyUp={(e: any) => setCurrentValue(ref.innerText)}
        >
          {translationLanguage}
        </div>
        {isNotSaved && (
          <form onSubmit={(e) => handleUpdateLanguage(e)}>
            <button type="submit">&#x2713;</button>
          </form>
        )}
      </div>

      <div className="delete-icon" onClick={(e: any) => handleDeleteLanguage(e)}>
        &times;
      </div>
    </div>
  );
}
