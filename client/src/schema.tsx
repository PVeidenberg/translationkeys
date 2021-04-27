/* eslint-disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Language = {
  __typename?: "Language";
  id: Scalars["ID"];
  languageName: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Adds new language */
  addLanguage: Language;
  /** Adds new project */
  addProject: Project;
  /** Adds new translation */
  addTranslation: Translation;
  /** Adds new translationkey */
  addTranslationkey: Translationkey;
  /** Attempts to log user in */
  login: Viewer;
  /** Logs out signed-in user if any */
  logout: Scalars["Boolean"];
  /** Registers new user */
  register: Viewer;
  /** Deletes excisting language */
  removeLanguage: Scalars["Boolean"];
  /** Deletes excisting project */
  removeProject: Scalars["Boolean"];
  /** Deletes excisting language */
  removeTranslation: Scalars["Boolean"];
  /** Deletes excisting translationkey */
  removeTranslationKey: Scalars["Boolean"];
  /** Updates excisting Language */
  updateLanguage: Scalars["Boolean"];
  /** Updates excisting project */
  updateProject: Scalars["Boolean"];
  /** Updates excisting translation */
  updateTranslation: Scalars["Boolean"];
  /** Updates excisting project */
  updateTranslationkey: Scalars["Boolean"];
};

export type MutationAddLanguageArgs = {
  languageName: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationAddProjectArgs = {
  projectName: Scalars["String"];
};

export type MutationAddTranslationArgs = {
  languageId: Scalars["String"];
  translationkeyId: Scalars["String"];
  translationValue: Scalars["String"];
};

export type MutationAddTranslationkeyArgs = {
  projectId: Scalars["String"];
  translationKeyName: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRemoveLanguageArgs = {
  id: Scalars["String"];
};

export type MutationRemoveProjectArgs = {
  id: Scalars["String"];
};

export type MutationRemoveTranslationArgs = {
  id: Scalars["String"];
};

export type MutationRemoveTranslationKeyArgs = {
  id: Scalars["String"];
};

export type MutationUpdateLanguageArgs = {
  id: Scalars["String"];
  languageName: Scalars["String"];
};

export type MutationUpdateProjectArgs = {
  id: Scalars["String"];
  projectName: Scalars["String"];
};

export type MutationUpdateTranslationArgs = {
  id: Scalars["String"];
  translationValue: Scalars["String"];
};

export type MutationUpdateTranslationkeyArgs = {
  id: Scalars["String"];
  translationkeyName: Scalars["String"];
};

export type Project = {
  __typename?: "Project";
  apiKey: Scalars["String"];
  id: Scalars["ID"];
  projectName: Scalars["String"];
  translations: Array<Translation>;
};

export type Query = {
  __typename?: "Query";
  /** Queries all languages */
  languages: Array<Language>;
  /** Queries all projects */
  projects: Array<Project>;
  /** Queries all translations */
  projectTranslations: Array<Translation>;
  /** Queries all translationkeys */
  translationkeys: Array<Translationkey>;
  /** Queries all translations */
  translations: Array<Translation>;
  /** Server version */
  version: Scalars["String"];
  /** Logged in user */
  viewer?: Maybe<Viewer>;
};

export type QueryLanguagesArgs = {
  projectId: Scalars["String"];
};

export type QueryProjectTranslationsArgs = {
  projectId: Scalars["String"];
};

export type QueryTranslationkeysArgs = {
  projectId: Scalars["String"];
};

export type QueryTranslationsArgs = {
  languageId: Scalars["String"];
  translationkeyId: Scalars["String"];
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  tagName: Scalars["String"];
};

export type Translation = {
  __typename?: "Translation";
  id: Scalars["ID"];
  languageId: Scalars["ID"];
  translationkeyId: Scalars["ID"];
  translationValue: Scalars["String"];
};

export type Translationkey = {
  __typename?: "Translationkey";
  id: Scalars["ID"];
  translationkeyName: Scalars["String"];
};

export type User = UserInterface & {
  __typename?: "User";
  /** User email address */
  email: Scalars["String"];
  /** User unique id */
  id: Scalars["ID"];
  /** User name */
  name: Scalars["String"];
};

export type UserInterface = {
  /** User email address */
  email: Scalars["String"];
  /** User unique id */
  id: Scalars["ID"];
  /** User name */
  name: Scalars["String"];
};

export type Viewer = UserInterface & {
  __typename?: "Viewer";
  /** User email address */
  email: Scalars["String"];
  /** User unique id */
  id: Scalars["ID"];
  /** User name */
  name: Scalars["String"];
};

export type ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type ViewerQuery = { __typename?: "Query" } & {
  viewer?: Maybe<{ __typename?: "Viewer" } & Pick<Viewer, "id">>;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation" } & Pick<Mutation, "logout">;

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "Viewer" } & Pick<Viewer, "id">;
};

export type AddTranslationkeyMutationVariables = Exact<{
  projectId: Scalars["String"];
  translationKeyName: Scalars["String"];
}>;

export type AddTranslationkeyMutation = { __typename?: "Mutation" } & {
  addTranslationkey: { __typename?: "Translationkey" } & Pick<Translationkey, "id">;
};

export type AddLanguageMutationVariables = Exact<{
  projectId: Scalars["String"];
  languageName: Scalars["String"];
}>;

export type AddLanguageMutation = { __typename?: "Mutation" } & {
  addLanguage: { __typename?: "Language" } & Pick<Language, "id">;
};

export type RemoveProjectMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveProjectMutation = { __typename?: "Mutation" } & Pick<Mutation, "removeProject">;

export type RegisterMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "Viewer" } & Pick<Viewer, "id">;
};

export type RemoveTranslationKeyMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveTranslationKeyMutation = { __typename?: "Mutation" } & Pick<Mutation, "removeTranslationKey">;

export type RemoveLanguageMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveLanguageMutation = { __typename?: "Mutation" } & Pick<Mutation, "removeLanguage">;

export type ProjectTranslationsQueryVariables = Exact<{
  projectId: Scalars["String"];
}>;

export type ProjectTranslationsQuery = { __typename?: "Query" } & {
  projectTranslations: Array<
    { __typename?: "Translation" } & Pick<Translation, "id" | "languageId" | "translationkeyId" | "translationValue">
  >;
  languages: Array<{ __typename?: "Language" } & Pick<Language, "id" | "languageName">>;
  translationkeys: Array<{ __typename?: "Translationkey" } & Pick<Translationkey, "id" | "translationkeyName">>;
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = { __typename?: "Query" } & {
  projects: Array<{ __typename?: "Project" } & Pick<Project, "id" | "projectName" | "apiKey">>;
};

export type AddProjectMutationVariables = Exact<{
  projectName: Scalars["String"];
}>;

export type AddProjectMutation = { __typename?: "Mutation" } & {
  addProject: { __typename?: "Project" } & Pick<Project, "id">;
};

export const ViewerDocument = gql`
  query Viewer {
    viewer {
      id
    }
  }
`;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
}
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
}
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AddTranslationkeyDocument = gql`
  mutation AddTranslationkey($projectId: String!, $translationKeyName: String!) {
    addTranslationkey(projectId: $projectId, translationKeyName: $translationKeyName) {
      id
    }
  }
`;
export type AddTranslationkeyMutationFn = Apollo.MutationFunction<
  AddTranslationkeyMutation,
  AddTranslationkeyMutationVariables
>;

/**
 * __useAddTranslationkeyMutation__
 *
 * To run a mutation, you first call `useAddTranslationkeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTranslationkeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTranslationkeyMutation, { data, loading, error }] = useAddTranslationkeyMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      translationKeyName: // value for 'translationKeyName'
 *   },
 * });
 */
export function useAddTranslationkeyMutation(
  baseOptions?: Apollo.MutationHookOptions<AddTranslationkeyMutation, AddTranslationkeyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddTranslationkeyMutation, AddTranslationkeyMutationVariables>(
    AddTranslationkeyDocument,
    options,
  );
}
export type AddTranslationkeyMutationHookResult = ReturnType<typeof useAddTranslationkeyMutation>;
export type AddTranslationkeyMutationResult = Apollo.MutationResult<AddTranslationkeyMutation>;
export type AddTranslationkeyMutationOptions = Apollo.BaseMutationOptions<
  AddTranslationkeyMutation,
  AddTranslationkeyMutationVariables
>;
export const AddLanguageDocument = gql`
  mutation AddLanguage($projectId: String!, $languageName: String!) {
    addLanguage(projectId: $projectId, languageName: $languageName) {
      id
    }
  }
`;
export type AddLanguageMutationFn = Apollo.MutationFunction<AddLanguageMutation, AddLanguageMutationVariables>;

/**
 * __useAddLanguageMutation__
 *
 * To run a mutation, you first call `useAddLanguageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLanguageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLanguageMutation, { data, loading, error }] = useAddLanguageMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      languageName: // value for 'languageName'
 *   },
 * });
 */
export function useAddLanguageMutation(
  baseOptions?: Apollo.MutationHookOptions<AddLanguageMutation, AddLanguageMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddLanguageMutation, AddLanguageMutationVariables>(AddLanguageDocument, options);
}
export type AddLanguageMutationHookResult = ReturnType<typeof useAddLanguageMutation>;
export type AddLanguageMutationResult = Apollo.MutationResult<AddLanguageMutation>;
export type AddLanguageMutationOptions = Apollo.BaseMutationOptions<AddLanguageMutation, AddLanguageMutationVariables>;
export const RemoveProjectDocument = gql`
  mutation RemoveProject($id: String!) {
    removeProject(id: $id)
  }
`;
export type RemoveProjectMutationFn = Apollo.MutationFunction<RemoveProjectMutation, RemoveProjectMutationVariables>;

/**
 * __useRemoveProjectMutation__
 *
 * To run a mutation, you first call `useRemoveProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProjectMutation, { data, loading, error }] = useRemoveProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveProjectMutation, RemoveProjectMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveProjectMutation, RemoveProjectMutationVariables>(RemoveProjectDocument, options);
}
export type RemoveProjectMutationHookResult = ReturnType<typeof useRemoveProjectMutation>;
export type RemoveProjectMutationResult = Apollo.MutationResult<RemoveProjectMutation>;
export type RemoveProjectMutationOptions = Apollo.BaseMutationOptions<
  RemoveProjectMutation,
  RemoveProjectMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      id
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RemoveTranslationKeyDocument = gql`
  mutation RemoveTranslationKey($id: String!) {
    removeTranslationKey(id: $id)
  }
`;
export type RemoveTranslationKeyMutationFn = Apollo.MutationFunction<
  RemoveTranslationKeyMutation,
  RemoveTranslationKeyMutationVariables
>;

/**
 * __useRemoveTranslationKeyMutation__
 *
 * To run a mutation, you first call `useRemoveTranslationKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTranslationKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTranslationKeyMutation, { data, loading, error }] = useRemoveTranslationKeyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTranslationKeyMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveTranslationKeyMutation, RemoveTranslationKeyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTranslationKeyMutation, RemoveTranslationKeyMutationVariables>(
    RemoveTranslationKeyDocument,
    options,
  );
}
export type RemoveTranslationKeyMutationHookResult = ReturnType<typeof useRemoveTranslationKeyMutation>;
export type RemoveTranslationKeyMutationResult = Apollo.MutationResult<RemoveTranslationKeyMutation>;
export type RemoveTranslationKeyMutationOptions = Apollo.BaseMutationOptions<
  RemoveTranslationKeyMutation,
  RemoveTranslationKeyMutationVariables
>;
export const RemoveLanguageDocument = gql`
  mutation RemoveLanguage($id: String!) {
    removeLanguage(id: $id)
  }
`;
export type RemoveLanguageMutationFn = Apollo.MutationFunction<RemoveLanguageMutation, RemoveLanguageMutationVariables>;

/**
 * __useRemoveLanguageMutation__
 *
 * To run a mutation, you first call `useRemoveLanguageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLanguageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLanguageMutation, { data, loading, error }] = useRemoveLanguageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveLanguageMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveLanguageMutation, RemoveLanguageMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveLanguageMutation, RemoveLanguageMutationVariables>(RemoveLanguageDocument, options);
}
export type RemoveLanguageMutationHookResult = ReturnType<typeof useRemoveLanguageMutation>;
export type RemoveLanguageMutationResult = Apollo.MutationResult<RemoveLanguageMutation>;
export type RemoveLanguageMutationOptions = Apollo.BaseMutationOptions<
  RemoveLanguageMutation,
  RemoveLanguageMutationVariables
>;
export const ProjectTranslationsDocument = gql`
  query ProjectTranslations($projectId: String!) {
    projectTranslations(projectId: $projectId) {
      id
      languageId
      translationkeyId
      translationValue
    }
    languages(projectId: $projectId) {
      id
      languageName
    }
    translationkeys(projectId: $projectId) {
      id
      translationkeyName
    }
  }
`;

/**
 * __useProjectTranslationsQuery__
 *
 * To run a query within a React component, call `useProjectTranslationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectTranslationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectTranslationsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useProjectTranslationsQuery(
  baseOptions: Apollo.QueryHookOptions<ProjectTranslationsQuery, ProjectTranslationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectTranslationsQuery, ProjectTranslationsQueryVariables>(
    ProjectTranslationsDocument,
    options,
  );
}
export function useProjectTranslationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProjectTranslationsQuery, ProjectTranslationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectTranslationsQuery, ProjectTranslationsQueryVariables>(
    ProjectTranslationsDocument,
    options,
  );
}
export type ProjectTranslationsQueryHookResult = ReturnType<typeof useProjectTranslationsQuery>;
export type ProjectTranslationsLazyQueryHookResult = ReturnType<typeof useProjectTranslationsLazyQuery>;
export type ProjectTranslationsQueryResult = Apollo.QueryResult<
  ProjectTranslationsQuery,
  ProjectTranslationsQueryVariables
>;
export const ProjectsDocument = gql`
  query Projects {
    projects {
      id
      projectName
      apiKey
    }
  }
`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
}
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const AddProjectDocument = gql`
  mutation addProject($projectName: String!) {
    addProject(projectName: $projectName) {
      id
    }
  }
`;
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      projectName: // value for 'projectName'
 *   },
 * });
 */
export function useAddProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
}
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
