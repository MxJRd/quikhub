import { RepoFragmentFragment } from "../../../generated/graphql";
import { formatRelative, subDays } from 'date-fns'

type ExtractRepoFragmentCommitType = Extract<NonNullable<RepoFragmentFragment['defaultBranchRef']>['target'], { __typename: 'Commit' }>;
type CommitType = NonNullable<ExtractRepoFragmentCommitType['history']['nodes']>[number]

export const CommitItem = (props: { commit: CommitType}) => {

  return (
    <div>
      <p class='font-semibold'>{props.commit?.messageHeadline}</p>
      {/* <p>{formatDistance(subDays(props.commit?.committedDate, 0), new Date(), { addSuffix: true })}</p> */}
      <p>{formatRelative(subDays(props.commit?.committedDate, 0), new Date())}</p>
    </div>
  )
}