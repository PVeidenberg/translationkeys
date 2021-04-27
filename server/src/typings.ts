/* eslint-disable */
import { FileUpload } from "graphql-upload";
import * as ctx from "./context";
import { FieldAuthorizeResolver } from "@nexus/schema/dist/plugins/fieldAuthorizePlugin";

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenRootTypes {
  Language: {
    // root type
    id: string; // ID!
    languageName: string; // String!
  };
  Mutation: {};
  Project: import("./entities/ProjectEntity").ProjectEntity;
  Query: {};
  Tag: {
    // root type
    id: string; // ID!
    tagName: string; // String!
  };
  Translation: {
    // root type
    id: string; // ID!
    languageId: string; // ID!
    translationkeyId: string; // ID!
    translationValue: string; // String!
  };
  Translationkey: {
    // root type
    id: string; // ID!
    translationkeyName: string; // String!
  };
  User: {
    // root type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  };
  Viewer: {
    // root type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  };
  UserInterface: NexusGenRootTypes["User"] | NexusGenRootTypes["Viewer"];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars["String"];
  Int: NexusGenScalars["Int"];
  Float: NexusGenScalars["Float"];
  Boolean: NexusGenScalars["Boolean"];
  ID: NexusGenScalars["ID"];
}

export interface NexusGenFieldTypes {
  Language: {
    // field return type
    id: string; // ID!
    languageName: string; // String!
  };
  Mutation: {
    // field return type
    addLanguage: NexusGenRootTypes["Language"]; // Language!
    addProject: NexusGenRootTypes["Project"]; // Project!
    addTranslation: NexusGenRootTypes["Translation"]; // Translation!
    addTranslationkey: NexusGenRootTypes["Translationkey"]; // Translationkey!
    login: NexusGenRootTypes["Viewer"]; // Viewer!
    logout: boolean; // Boolean!
    register: NexusGenRootTypes["Viewer"]; // Viewer!
    removeLanguage: boolean; // Boolean!
    removeProject: boolean; // Boolean!
    removeTranslation: boolean; // Boolean!
    removeTranslationKey: boolean; // Boolean!
    updateLanguage: boolean; // Boolean!
    updateProject: boolean; // Boolean!
    updateTranslation: boolean; // Boolean!
    updateTranslationkey: boolean; // Boolean!
  };
  Project: {
    // field return type
    apiKey: string; // String!
    id: string; // ID!
    projectName: string; // String!
    translations: NexusGenRootTypes["Translation"][]; // [Translation!]!
  };
  Query: {
    // field return type
    languages: NexusGenRootTypes["Language"][]; // [Language!]!
    projects: NexusGenRootTypes["Project"][]; // [Project!]!
    projectTranslations: NexusGenRootTypes["Translation"][]; // [Translation!]!
    translationkeys: NexusGenRootTypes["Translationkey"][]; // [Translationkey!]!
    translations: NexusGenRootTypes["Translation"][]; // [Translation!]!
    version: string; // String!
    viewer: NexusGenRootTypes["Viewer"] | null; // Viewer
  };
  Tag: {
    // field return type
    id: string; // ID!
    tagName: string; // String!
  };
  Translation: {
    // field return type
    id: string; // ID!
    languageId: string; // ID!
    translationkeyId: string; // ID!
    translationValue: string; // String!
  };
  Translationkey: {
    // field return type
    id: string; // ID!
    translationkeyName: string; // String!
  };
  User: {
    // field return type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  };
  Viewer: {
    // field return type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  };
  UserInterface: {
    // field return type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  };
}

export interface NexusGenFieldTypeNames {
  Language: {
    // field return type name
    id: "ID";
    languageName: "String";
  };
  Mutation: {
    // field return type name
    addLanguage: "Language";
    addProject: "Project";
    addTranslation: "Translation";
    addTranslationkey: "Translationkey";
    login: "Viewer";
    logout: "Boolean";
    register: "Viewer";
    removeLanguage: "Boolean";
    removeProject: "Boolean";
    removeTranslation: "Boolean";
    removeTranslationKey: "Boolean";
    updateLanguage: "Boolean";
    updateProject: "Boolean";
    updateTranslation: "Boolean";
    updateTranslationkey: "Boolean";
  };
  Project: {
    // field return type name
    apiKey: "String";
    id: "ID";
    projectName: "String";
    translations: "Translation";
  };
  Query: {
    // field return type name
    languages: "Language";
    projects: "Project";
    projectTranslations: "Translation";
    translationkeys: "Translationkey";
    translations: "Translation";
    version: "String";
    viewer: "Viewer";
  };
  Tag: {
    // field return type name
    id: "ID";
    tagName: "String";
  };
  Translation: {
    // field return type name
    id: "ID";
    languageId: "ID";
    translationkeyId: "ID";
    translationValue: "String";
  };
  Translationkey: {
    // field return type name
    id: "ID";
    translationkeyName: "String";
  };
  User: {
    // field return type name
    email: "String";
    id: "ID";
    name: "String";
  };
  Viewer: {
    // field return type name
    email: "String";
    id: "ID";
    name: "String";
  };
  UserInterface: {
    // field return type name
    email: "String";
    id: "ID";
    name: "String";
  };
}

export interface NexusGenArgTypes {
  Mutation: {
    addLanguage: {
      // args
      languageName: string; // String!
      projectId: string; // String!
    };
    addProject: {
      // args
      projectName: string; // String!
    };
    addTranslation: {
      // args
      languageId: string; // String!
      translationkeyId: string; // String!
      translationValue: string; // String!
    };
    addTranslationkey: {
      // args
      projectId: string; // String!
      translationKeyName: string; // String!
    };
    login: {
      // args
      email: string; // String!
      password: string; // String!
    };
    register: {
      // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    };
    removeLanguage: {
      // args
      id: string; // String!
    };
    removeProject: {
      // args
      id: string; // String!
    };
    removeTranslation: {
      // args
      id: string; // String!
    };
    removeTranslationKey: {
      // args
      id: string; // String!
    };
    updateLanguage: {
      // args
      id: string; // String!
      languageName: string; // String!
    };
    updateProject: {
      // args
      id: string; // String!
      projectName: string; // String!
    };
    updateTranslation: {
      // args
      id: string; // String!
      translationValue: string; // String!
    };
    updateTranslationkey: {
      // args
      id: string; // String!
      translationkeyName: string; // String!
    };
  };
  Query: {
    languages: {
      // args
      projectId: string; // String!
    };
    projectTranslations: {
      // args
      projectId: string; // String!
    };
    translationkeys: {
      // args
      projectId: string; // String!
    };
    translations: {
      // args
      languageId: string; // String!
      translationkeyId: string; // String!
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {
  UserInterface: "User" | "Viewer";
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames =
  | "Language"
  | "Mutation"
  | "Project"
  | "Query"
  | "Tag"
  | "Translation"
  | "Translationkey"
  | "User"
  | "Viewer";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "UserInterface";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes["inputNames"] | NexusGenTypes["enumNames"] | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes: NexusGenTypes["allInputTypes"] | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>;
  }
  interface NexusGenPluginSchemaConfig {}
}
