// import { RepoFragmentFragment } from "../../../generated/graphql";

// type ExtractRepoFragmentCommitType = Extract<NonNullable<RepoFragmentFragment['defaultBranchRef']>['target'], { __typename: 'Commit' }>;
// type CommitType = NonNullable<ExtractRepoFragmentCommitType['history']['nodes']>[number]

export type CommitType = {
  __typename?: "Commit";
  oid: any;
  messageHeadline: string;
  committedDate: string;
} | null | undefined;