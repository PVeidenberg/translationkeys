import { useEffect, useState } from "react";
import * as React from "react";
import { useMutation } from "@apollo/client";
import TranslationsTable from "../../components/table/TranslationsTable";
import "./translation-key.scss";

interface StyledTranslationProps {
  isNotSaved?: boolean;
}

interface TranslationKeyProps {
  translationKey: string;
}

// const UPDATE_KEY = gql`
//   mutation UpdateKey($nodeId: ID!, $name: String) {
//     updateTranslationKey(
//       input: { nodeId: $nodeId, translationKeyPatch: { name: $name } }
//     ) {
//       translationKey {
//         nodeId
//         name
//       }
//     }
//   }
// `;

// const DELETE_KEY = gql`
//   mutation DeleteKey($nodeId: ID!) {
//     deleteTranslationKey(input: { nodeId: $nodeId }) {
//       translationKey {
//         nodeId
//         name
//       }
//     }
//   }
// `;

export default function TranslationKey(props: TranslationKeyProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(props.translationKey);
  const { translationKey: key } = props;

  if (!key) {
    return null;
  }
  
  // useEffect(() => ref.focus(), [isActive]);

//   const [deleteKey] = useMutation(DELETE_KEY);
//   const [updateKey] = useMutation(UPDATE_KEY);


const handleUpdateKey = (
  updateKey: any,
  keyId: string | null,
  ref: any,
  e: any
  ) => {
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
  
  const handleDeleteKey = (deleteKey: any, keyId: string | null, e: any) => {
    console.log("handleDeleteKey");
    /*  e.preventDefault();
    
    deleteKey({
      refetchQueries: ["ProjectView"],
      variables: { nodeId: keyId },
    });*/

  };

  return (
    <div className="translation-key-container">
      <div className="delete-icon" onClick={(e: any) => handleDeleteKey(null, key, e)}>
        &times;
      </div>
      <div>
        <div className="styled-translation-key" 
          contentEditable={isActive}
          suppressContentEditableWarning={true}
          onClick={(e:any) => {
            setIsActive(true);
          }}
          >
        </div>
        
        { /*isNotSaved && (
          <form
            onSubmit={(e) => handleUpdateKey(null, key, ref, e)}
          >
            <button type="submit">&#x2713;</button>
        </form> 
        )}*/}
      </div>
    </div>
  );
};
