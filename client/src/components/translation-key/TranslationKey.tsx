import { useEffect, useState } from "react";
import * as React from "react";
import { useMutation } from "@apollo/client";

// interface StyledTranslationProps {
//   isNotSaved?: boolean;
// }

// const DeleteIcon = styled.span`
//   padding: 2px 5px;
//   visibility: hidden;
//   cursor: pointer;
//   font-size: 24px;

//   &:hover {
//     color: red;
//   }
// `;

// const TranslationKeyContainer = styled.div`
//   display: flex;
//   align-items: center;

//   &:hover {
//     ${DeleteIcon} {
//       visibility: visible;
//     }
//   }
// `;

// const StyledTranslationKey = styled.div<StyledTranslationProps>`
//   background: ${(p) => p.isNotSaved && "#dae4ed"};
//   padding: 10px;
//   padding-left: 5px;
//   min-width: 50px;
//   cursor: pointer;
// `;

// interface TranslationKeyProps {
//   translationKey: ProjectView_project_keys_nodes;
// }

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

// const TranslationKey = (props: TranslationKeyProps) => {
//   const { translationKey: key } = props;

//   if (!key) {
//     return null;
//   }

//   const initialValue = key.name;

//   const [isActive, setIsActive] = useState(false);
//   const [currentValue, setCurrentValue] = useState(initialValue);
//   const isNotSaved = initialValue !== currentValue;

//   let ref: any = {};

//   useEffect(() => ref.focus(), [isActive]);

//   const [deleteKey] = useMutation(DELETE_KEY);
//   const [updateKey] = useMutation(UPDATE_KEY);

//   return (
//     <TranslationKeyContainer>
//       <DeleteIcon onClick={(e) => handleDeleteKey(deleteKey, key.nodeId, e)}>
//         &times;
//       </DeleteIcon>
//       <div>
//         <StyledTranslationKey
//           ref={(el: any) => {
//             ref = el;
//           }}
//           isNotSaved={isNotSaved}
//           contentEditable={isActive}
//           suppressContentEditableWarning={true}
//           onClick={(e) => {
//             setIsActive(true);
//           }}
//           onKeyUp={(e) => setCurrentValue(ref.innerText)}
//         >
//           {key.name}
//         </StyledTranslationKey>
//         {isNotSaved && (
//           <form
//             onSubmit={(e) => handleUpdateKey(updateKey, key.nodeId, ref, e)}
//           >
//             <button type="submit">&#x2713;</button>
//           </form>
//         )}
//       </div>
//     </TranslationKeyContainer>
//   );
// };

// const handleUpdateKey = (
//   updateKey: any,
//   keyId: string | null,
//   ref: any,
//   e: any
// ) => {
//   e.preventDefault();
//   if (!ref) {
//     return;
//   }

//   updateKey({
//     refetchQueries: ["ProjectView"],
//     variables: { nodeId: keyId, name: ref.innerText },
//   });
// };

// const handleDeleteKey = (deleteKey: any, keyId: string | null, e: any) => {
//   e.preventDefault();

//   deleteKey({
//     refetchQueries: ["ProjectView"],
//     variables: { nodeId: keyId },
//   });
// };

// export default TranslationKey;
