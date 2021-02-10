import { useEffect, useState } from "react";
import * as React from "react";

import { useMutation } from "@apollo/client";

// interface StyledTranslationProps {
// 	isNotSaved?: boolean;
// }

// const StyledTranslation = styled.div<StyledTranslationProps>`
// 	background: ${p => p.isNotSaved && '#dae4ed'};
// 	padding: 10px;
// 	min-width: 50px;
// 	cursor: pointer;
// 	flex-grow: 1;
// 	white-space: pre-wrap;
// `;

// const StyledButton = styled.button`
// 	width: 100%;
// `;

// interface TranslationProps {
// 	translations: Array<ProjectView_project_keys_nodes_translation_nodes | null>;
// 	language: ProjectView_project_languages_nodes | null;
// 	keyId: number;
// }

// const ADD_TRANSLATION = gql`
// 	mutation AddTranslation($name: String!, $keyId: Int!, $languageId: Int!) {
// 		createTranslation(
// 			input: { translation: { name: $name, translationKeyId: $keyId, translationLanguageId: $languageId } }
// 		) {
// 			translation {
// 				nodeId
// 				name
// 			}
// 		}
// 	}
// `;

// const UPDATE_TRANSLATION = gql`
// 	mutation UpdateTranslation($nodeId: ID!, $name: String) {
// 		updateTranslation(input: { nodeId: $nodeId, translationPatch: { name: $name } }) {
// 			translation {
// 				nodeId
// 				name
// 			}
// 		}
// 	}
// `;
// const Translation = (props: any) => {
// 	const { translations, language, keyId } = props;

// 	if (!language) {
// 		return null;
// 	}

// 	const existingTranslation = translations.find(trns =>
// 		!trns || !trns.language ? false : trns.language.id === language.id,
// 	);
// 	const initialValue = existingTranslation ? existingTranslation.name : '';

// 	const [isActive, setIsActive] = useState(false);
// 	const [currentValue, setCurrentValue] = useState(initialValue);
// 	const isNotSaved = initialValue !== currentValue;

// 	let ref: any = {};

// 	useEffect(() => setCurrentValue(initialValue), [initialValue]);
// 	useEffect(() => ref.focus(), [isActive]);

// 	const [updateTranslation] = useMutation(UPDATE_TRANSLATION);
// 	const [addTranslation] = useMutation(ADD_TRANSLATION);

// 	// console.log({ initialValue, replaced: initialValue.replace(/[\n\r]+/g, '<br>') });

// 	return (
// 		<>
// 			<StyledTranslation
// 				ref={(el: any) => {
// 					ref = el;
// 				}}
// 				isNotSaved={isNotSaved}
// 				contentEditable={isActive}
// 				suppressContentEditableWarning={true}
// 				onClick={e => {
// 					setIsActive(true);
// 				}}
// 				onKeyUp={e => setCurrentValue(ref.innerText)}
// 			>
// 				{(existingTranslation && existingTranslation.name) || ''}
// 			</StyledTranslation>
// 			{isNotSaved && (
// 				<>
// 					{existingTranslation ? (
// 						<form onSubmit={e => handleUpdateTranslation(updateTranslation, existingTranslation.nodeId, ref, e)}>
// 							<StyledButton type="submit">&#x2713;</StyledButton>
// 						</form>
// 					) : (
// 						<form onSubmit={e => handlAddTranslation(addTranslation, language.id, keyId, ref, e)}>
// 							<StyledButton type="submit">&#x2713;</StyledButton>
// 						</form>
// 					)}
// 				</>
// 			)}
// 		</>
// 	);
// };

// const handlAddTranslation = (
// 	addTranslation: any,
// 	languageId: number | null,
// 	keyId: number | null,
// 	ref: any,
// 	e: any,
// ) => {
// 	e.preventDefault();
// 	if (!ref) {
// 		return;
// 	}

// 	addTranslation({
// 		refetchQueries: ['ProjectView'],
// 		variables: { name: ref.innerText, languageId, keyId },
// 	});
// };

// const handleUpdateTranslation = (updateTranslation: any, translationId: string | null, ref: any, e: any) => {
// 	e.preventDefault();
// 	if (!ref) {
// 		return;
// 	}

// 	updateTranslation({
// 		refetchQueries: ['ProjectView'],
// 		variables: { nodeId: translationId, name: ref.innerText },
// 	});
// };

// export default Translation;
