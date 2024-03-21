import { formatDistance, formatRelative, subDays } from 'date-fns'
import { CommitType } from "./types";

export const CommitItem = (props: { commit: CommitType }) => {

  return (
    <div class='bg-green-700 px-4 py-2 rounded-md'>
      <p class='font-semibold truncate'>{props.commit?.messageHeadline}</p>
      <div class='mt-1 text-end'>
        <p>{formatDistance(subDays(props.commit?.committedDate, 0), new Date(), { addSuffix: true })}</p>
        <p>{formatRelative(subDays(props.commit?.committedDate, 14), new Date())}</p>
      </div>

    </div>
  )
}
