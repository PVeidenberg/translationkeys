import { useEffect, useState } from "react";
import * as React from "react";
import { useMutation } from "@apollo/client";

// interface StyledTranslationlanguageProps {
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

// const TranslationLanguageContainer = styled.div`
//   display: flex;
//   align-items: center;

//   &:hover {
//     ${DeleteIcon} {
//       visibility: visible;
//     }
//   }
// `;

// const StyledTranslationLanguage = styled.div<StyledTranslationlanguageProps>`
//   background: ${(p) => p.isNotSaved && "#dae4ed"};
//   padding: 10px;
//   min-width: 50px;
//   cursor: pointer;
// `;

// interface TranslationLanguageProps {
//   translationLanguage: ProjectView_project_languages_nodes;
// }

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

// const TranslationLanguage = (props: TranslationLanguageProps) => {
//   const { translationLanguage: language } = props;

//   if (!language) {
//     return null;
//   }

//   const initialValue = language.name;

//   const [isActive, setIsActive] = useState(false);
//   const [currentValue, setCurrentValue] = useState(initialValue);
//   const isNotSaved = initialValue !== currentValue;
//   let ref: any = {};

//   useEffect(() => ref.focus(), [isActive]);
//   const [updateKey] = useMutation(UPDATE_LANGUAGE);
//   const [deleteKey] = useMutation(DELETE_LANGUAGE);

//   return (
//     <TranslationLanguageContainer>
//       <div>
//         <StyledTranslationLanguage
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
//           {language.name}
//         </StyledTranslationLanguage>
//         {isNotSaved && (
//           <form
//             onSubmit={(e) =>
//               handleUpdateLanguage(updateKey, language.nodeId, ref, e)
//             }
//           >
//             <button type="submit">&#x2713;</button>
//           </form>
//         )}
//       </div>

//       <DeleteIcon
//         onClick={(e) => handleDeleteLanguage(deleteKey, language.nodeId, e)}
//       >
//         &times;
//       </DeleteIcon>
//     </TranslationLanguageContainer>
//   );
// };

// const handleUpdateLanguage = (
//   updateLanguage: any,
//   languageId: string | null,
//   ref: any,
//   e: any
// ) => {
//   e.preventDefault();
//   if (!ref) {
//     return;
//   }

//   updateLanguage({
//     refetchQueries: ["ProjectView"],
//     variables: { nodeId: languageId, name: ref.innerText },
//   });
// };

// const handleDeleteLanguage = (
//   deleteLanguage: any,
//   languageId: string | null,
//   e: any
// ) => {
//   e.preventDefault();

//   deleteLanguage({
//     refetchQueries: ["ProjectView"],
//     variables: { nodeId: languageId },
//   });
// };

// export default TranslationLanguage;
