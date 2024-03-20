/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment RepoFragment on Repository {\n    id\n    name\n    defaultBranchRef {\n      target {\n        __typename\n        ... on Commit {\n          history(author: {emails: $emails}, after: $cursorCommit) {\n            totalCount\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            nodes {\n              ... on Commit {\n                oid\n                messageHeadline\n                committedDate\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.RepoFragmentFragmentDoc,
    "\nquery UserRepos (\n  $cursorRepo: String,\n  $cursorCommit: String,\n  $user: String = \"\",\n  $emails: [String!] = [\"mxjreed@gmail.com\"]\n) {\n  user(login: $user) {\n    id\n    repositoriesContributedTo(\n      includeUserRepositories: true\n      contributionTypes: COMMIT\n      last: 100\n      after: $cursorRepo\n    ) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        ...RepoFragment\n      }\n    }\n  }\n}\n": types.UserReposDocument,
    "\nquery UserInfo ($user: String!) {\n  user(login: $user) {\n    id\n    name\n    company\n    email\n    avatarUrl\n  }\n}\n": types.UserInfoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RepoFragment on Repository {\n    id\n    name\n    defaultBranchRef {\n      target {\n        __typename\n        ... on Commit {\n          history(author: {emails: $emails}, after: $cursorCommit) {\n            totalCount\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            nodes {\n              ... on Commit {\n                oid\n                messageHeadline\n                committedDate\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RepoFragment on Repository {\n    id\n    name\n    defaultBranchRef {\n      target {\n        __typename\n        ... on Commit {\n          history(author: {emails: $emails}, after: $cursorCommit) {\n            totalCount\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            nodes {\n              ... on Commit {\n                oid\n                messageHeadline\n                committedDate\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery UserRepos (\n  $cursorRepo: String,\n  $cursorCommit: String,\n  $user: String = \"\",\n  $emails: [String!] = [\"mxjreed@gmail.com\"]\n) {\n  user(login: $user) {\n    id\n    repositoriesContributedTo(\n      includeUserRepositories: true\n      contributionTypes: COMMIT\n      last: 100\n      after: $cursorRepo\n    ) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        ...RepoFragment\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery UserRepos (\n  $cursorRepo: String,\n  $cursorCommit: String,\n  $user: String = \"\",\n  $emails: [String!] = [\"mxjreed@gmail.com\"]\n) {\n  user(login: $user) {\n    id\n    repositoriesContributedTo(\n      includeUserRepositories: true\n      contributionTypes: COMMIT\n      last: 100\n      after: $cursorRepo\n    ) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        ...RepoFragment\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery UserInfo ($user: String!) {\n  user(login: $user) {\n    id\n    name\n    company\n    email\n    avatarUrl\n  }\n}\n"): (typeof documents)["\nquery UserInfo ($user: String!) {\n  user(login: $user) {\n    id\n    name\n    company\n    email\n    avatarUrl\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;