import { graphql } from "./generated";

export const RepoFragment = graphql(`
  fragment RepoFragment on Repository {
    id
    name
    defaultBranchRef {
      target {
        __typename
        ... on Commit {
          history(author: {emails: $emails}, after: $cursorCommit) {
            totalCount
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              ... on Commit {
                oid
                messageHeadline
                committedDate
              }
            }
          }
        }
      }
    }
  }
`)

export const UserReposCommits = graphql(`
query UserRepos (
  $cursorRepo: String,
  $cursorCommit: String,
  $user: String = "",
  $emails: [String!] = ["mxjreed@gmail.com"]
) {
  user(login: $user) {
    id
    repositoriesContributedTo(
      includeUserRepositories: true
      contributionTypes: COMMIT
      last: 100
      after: $cursorRepo
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...RepoFragment
      }
    }
  }
}
`)

export const UserInfo = graphql(`
query UserInfo ($user: String!) {
  user(login: $user) {
    id
    name
    company
    email
    avatarUrl
  }
}
`)