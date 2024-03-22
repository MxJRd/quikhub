import { formatDistance, format, subDays } from 'date-fns'
import { CommitType } from "./types";
import { CommonBadge } from '../CommonBadge';

export const CommitItem = (props: { commit: CommitType, colors: string[] }) => {
  return (
    <div class={`${props.colors[1]} px-4 py-2 rounded-md`}>
      <p class='font-semibold text-lg truncate'>{props.commit?.messageHeadline}</p>
      <div class='flex flex-col items-end mt-1.5 text-end'>
        <p class='font-semibold'>{formatDistance(subDays(props.commit?.committedDate ?? '', 0), new Date(), { addSuffix: true })}</p>
        <CommonBadge color={props.colors[2]} content={format(props.commit?.committedDate ?? '', 'hh:mm aaa')} />
      </div>

    </div>
  )
}
