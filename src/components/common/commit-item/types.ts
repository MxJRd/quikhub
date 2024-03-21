import { RepoFragmentFragment } from "../../../generated/graphql";

type ExtractRepoFragmentCommitType = Extract<NonNullable<RepoFragmentFragment['defaultBranchRef']>['target'], { __typename: 'Commit' }>;
export type CommitType = NonNullable<ExtractRepoFragmentCommitType['history']['nodes']>[number]