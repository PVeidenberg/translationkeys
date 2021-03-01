import { useEffect, useState } from "react";
import * as React from "react";
import "./translation.scss";

import { useMutation } from "@apollo/client";

interface StyledTranslationProps {
	isNotSaved?: boolean;
}

interface TranslationProps {
	translations: Array<string | null>;
	language: string | null;
	keyId: number;
}

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
export default function Translation(props: any) {
	const { translations, language, keyId } = props;

	if (!language) {
		return null;
	}

	const existingTranslation = translations.find((trns:any) =>
		!trns || !trns.language ? false : trns.language.id === language.id,
	);
	const initialValue = existingTranslation ? existingTranslation.name : '';

	const [isActive, setIsActive] = useState(false);
	const [currentValue, setCurrentValue] = useState(initialValue);
	const isNotSaved = initialValue !== currentValue;

	let ref: any = {};

// 	useEffect(() => setCurrentValue(initialValue), [initialValue]);
// 	useEffect(() => ref.focus(), [isActive]);

// 	const [updateTranslation] = useMutation(UPDATE_TRANSLATION);
// 	const [addTranslation] = useMutation(ADD_TRANSLATION);

	console.log({ initialValue, replaced: initialValue.replace(/[\n\r]+/g, '<br>') });

	return (
		<>
			<div className="styled-translation"
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
				{(existingTranslation && existingTranslation.name) || ''}
            </div>
			{isNotSaved && (
				<>
					{existingTranslation ? (
						<form onSubmit={e => handleUpdateTranslation(null, existingTranslation.nodeId, ref, e)}>
							<button className="styled-button" type="submit">&#x2713;</button>
						</form>
					) : (
						<form onSubmit={e => handlAddTranslation(null, language.id, keyId, ref, e)}>
							<button type="submit">&#x2713;</button>
						</form>
					)}
				</>
			)}
		</>
	);
};

const handlAddTranslation = (
	addTranslation: any,
	languageId: number | null,
	keyId: number | null,
	ref: any,
	e: any,
) => {
	e.preventDefault();
	if (!ref) {
		return;
	}

	addTranslation({
		refetchQueries: ['ProjectView'],
		variables: { name: ref.innerText, languageId, keyId },
	});
};

const handleUpdateTranslation = (updateTranslation: any, translationId: string | null, ref: any, e: any) => {
	e.preventDefault();
	if (!ref) {
		return;
	}

	updateTranslation({
		refetchQueries: ['ProjectView'],
		variables: { nodeId: translationId, name: ref.innerText },
	});
};
