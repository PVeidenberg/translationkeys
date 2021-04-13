import { useState } from "react";
import * as React from "react";
import "./translation-language.scss";

interface StyledTranslationlanguageProps {
  isNotSaved?: boolean;
}

interface TranslationLanguage {
  translationLanguage: string;
}

export default function TranslationLanguage(props: TranslationLanguage) {
  // const { translationLanguage: language } = props;
  const { translationLanguage } = props;

  const initialValue = translationLanguage;
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);
  const isNotSaved = initialValue !== currentValue;

  if (!translationLanguage) {
    return null;
  }

  let ref: any = {};

  //   useEffect(() => ref.focus(), [isActive]);
  //   const [updateKey] = useMutation(UPDATE_LANGUAGE);
  //   const [deleteKey] = useMutation(DELETE_LANGUAGE);

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

const handleUpdateLanguage = (e: any) => {
  e.preventDefault();
};

const handleDeleteLanguage = (e: any) => {
  e.preventDefault();
};
