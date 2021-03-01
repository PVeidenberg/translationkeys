import { useEffect, useState } from "react";
import * as React from "react";
import { useMutation } from "@apollo/client";
import "./translation-language.scss";

interface StyledTranslationlanguageProps {
  isNotSaved?: boolean;
}

interface TranslationLanguageProps {
  translationLanguage: string;
}

// const UPDATE_LANGUAGE = gql`
//   mutation UpdateLanguage($nodeId: ID!, $name: String) {
//     updateTranslationLanguage(
//       input: { nodeId: $nodeId, translationLanguagePatch: { name: $name } }
//     ) {
//       translationLanguage {
//         nodeId
//         name
//       }
//     }
//   }
// `;

// const DELETE_LANGUAGE = gql`
//   mutation Deleteanguage($nodeId: ID!) {
//     deleteTranslationLanguage(input: { nodeId: $nodeId }) {
//       translationLanguage {
//         nodeId
//         name
//       }
//     }
//   }
// `;

export default function TranslationLanguage(props: TranslationLanguageProps) {
  const { translationLanguage: language } = props;

  if (!language) {
    return null;
  }

  const initialValue = language;

  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);
  const isNotSaved = initialValue !== currentValue;
  let ref: any = {};

//   useEffect(() => ref.focus(), [isActive]);
//   const [updateKey] = useMutation(UPDATE_LANGUAGE);
//   const [deleteKey] = useMutation(DELETE_LANGUAGE);

  return (
    <div className="translation-language-container">
        <div>
        <div className="styled-translation-language"
         ref={(el: any) => {
            ref = el;
          }}
          contentEditable={isActive}
          suppressContentEditableWarning={true}
          onClick={(e:any) => {
            setIsActive(true);
          }}
          onKeyUp={(e:any) => setCurrentValue(ref.innerText)}
        >
          {language}
        </div>
        {isNotSaved && (
          <form
            onSubmit={(e) =>
              handleUpdateLanguage(null, language, ref, e)
            }
          >
            <button type="submit">&#x2713;</button>
          </form>
        )}
      </div>

      <div className="delete-icon" onClick={(e:any) => handleDeleteLanguage(null, language, e)}>
        &times;
      </div>
    </div>
  );
};

const handleUpdateLanguage = (
  updateLanguage: any,
  languageId: string | null,
  ref: any,
  e: any
) => {
  e.preventDefault();
  if (!ref) {
    return;
  }

  updateLanguage({
    refetchQueries: ["ProjectView"],
    variables: { nodeId: languageId, name: ref.innerText },
  });
};

const handleDeleteLanguage = (
  deleteLanguage: any,
  languageId: string | null,
  e: any
) => {
  e.preventDefault();

  deleteLanguage({
    refetchQueries: ["ProjectView"],
    variables: { nodeId: languageId },
  });
};
