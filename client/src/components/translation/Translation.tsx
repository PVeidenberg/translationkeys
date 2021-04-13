import { useEffect, useState } from "react";
import * as React from "react";
import "./translation.scss";

interface StyledTranslationProps {
  isNotSaved?: boolean;
}

interface TranslationProps {
  translation: any;
}

// `;
export default function Translation(props: any) {
  const { translationValue } = props;

  console.log("translationTranslation", translationValue);

  const initialValue = "";

  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);
  const isNotSaved = initialValue !== currentValue;

  if (!translationValue) {
    return null;
  }

  const existingTranslation = "";

  // 	useEffect(() => setCurrentValue(initialValue), [initialValue]);
  // 	useEffect(() => ref.focus(), [isActive]);

  // 	const [updateTranslation] = useMutation(UPDATE_TRANSLATION);
  // 	const [addTranslation] = useMutation(ADD_TRANSLATION);

  // console.log({ initialValue, replaced: initialValue.replace(/[\n\r]+/g, '<br>') });

  return (
    <div
      className="styled-translation"
      contentEditable={isActive}
      suppressContentEditableWarning={true}
      onClick={(e: any) => {
        setIsActive(true);
      }}
      onKeyUp={(e: any) => setCurrentValue("asdasd")}
    >
      {translationValue}
    </div>
  );
}

const handlAddTranslation = (e: any) => {
  e.preventDefault();
};

const handleUpdateTranslation = (e: any) => {
  e.preventDefault();
};
