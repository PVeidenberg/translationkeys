import { useEffect, useState } from "react";
import * as React from "react";
import { useMutation } from "@apollo/client";
import TranslationsTable from "../../components/table/TranslationsTable";
import "./translation-key.scss";
import { gql } from "@apollo/client";
import { useRemoveTranslationKeyMutation } from "../../schema";

interface StyledTranslationProps {
  isNotSaved?: boolean;
}

interface TranslationKeyProps {
  translationKey: string;
  translationKeyId: string;
}

// removeLanguage mutation (generates useRemoveLanguageMutation hook)
gql`
  mutation RemoveTranslationKey($id: String!) {
    removeTranslationKey(id: $id)
  }
`;

export default function TranslationKey(props: TranslationKeyProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(props.translationKey);
  const { translationKey, translationKeyId } = props;

  // setup addProject mutation
  const [removeTranslationKey, removeTranslationKeyResult] = useRemoveTranslationKeyMutation({
    refetchQueries: ["ProjectTranslations"],
    awaitRefetchQueries: true,
  });
  if (!translationKey) {
    return null;
  }
  // useEffect(() => ref.focus(), [isActive]);

  //   const [deleteKey] = useMutation(DELETE_KEY);
  //   const [updateKey] = useMutation(UPDATE_KEY);

  const handleUpdateKey = (e: any) => {
    console.log("handleUpdateKey");
    /*
    e.preventDefault();
    if (!ref) {
      return;
    }
    
    updateKey({
      refetchQueries: ["ProjectView"],
      variables: { nodeId: keyId, name: ref.innerText },
    });*/
  };

  const handleDeleteKey = async (e: any) => {
    console.log("handleDeleteKey");
    e.preventDefault();

    await removeTranslationKey({
      variables: { id: translationKeyId },
    });
  };

  return (
    <div className="translation-key-container">
      <div
        className="styled-translation-key"
        contentEditable={isActive}
        suppressContentEditableWarning={true}
        onClick={(e: any) => {
          setIsActive(true);
        }}
      >
        {translationKey}
      </div>

      <div className="delete-icon" onClick={(e: any) => handleDeleteKey(e)}>
        &times;
      </div>

      {/*isNotSaved && (
          <form
            onSubmit={(e) => handleUpdateKey(null, key, ref, e)}
          >
            <button type="submit">&#x2713;</button>
        </form> 
        )}*/}
    </div>
  );
}
