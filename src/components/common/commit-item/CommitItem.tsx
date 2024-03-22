import { formatDistance, subDays } from 'date-fns'
import { CommitType } from "./types";

export const CommitItem = (props: { commit: CommitType, color: string }) => {
  return (
    <div class={`${props.color} px-4 py-2 rounded-md`}>
      <p class='font-semibold truncate'>{props.commit?.messageHeadline}</p>
      <div class='mt-1 text-end'>
        <p>{formatDistance(subDays(props.commit?.committedDate ?? '', 0), new Date(), { addSuffix: true })}</p>
      </div>
    </div>
  )
}
