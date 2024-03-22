import { CommonBadge } from "./CommonBadge"
import { CommitItem } from "./commit-item/CommitItem"
import { CommitType } from "./commit-item/types"
import { format } from 'date-fns'

enum DaysOfWeek {
  'Monday' = 'Monday',
  'Tuesday' = 'Tuesday',
  'Wednesday' = 'Wednesday',
  'Thursday' = 'Thursday',
  'Friday' = 'Friday',
  'Saturday' = 'Saturday',
  'Sunday' = 'Sunday'
}

const fetchDayOfWeekColor = (day: string) => {
  switch(day) {
    case DaysOfWeek['Monday']:
      return ['bg-green-400/[0.2]', 'bg-green-600']
    case DaysOfWeek['Tuesday']:
      return ['bg-orange-400/[0.2]', 'bg-orange-600']
    case DaysOfWeek['Wednesday']:
      return ['bg-blue-400/[0.2]', 'bg-blue-600']
    case DaysOfWeek['Thursday']:
      return ['bg-red-400/[0.2]', 'bg-red-600']
    case DaysOfWeek['Friday']:
      return ['bg-yellow-400/[0.2]', 'bg-yellow-600']
    case DaysOfWeek['Saturday']:
      return ['bg-purple-400/[0.2]', 'bg-purple-600']
    case DaysOfWeek['Sunday']:
      return ['bg-pink-400/[0.2]', 'bg-pink-400']
    default: return ['bg-green-400/[0.2]', 'bg-green-600']
  }
}

export const DayContainer = (props: { dateKey: string, commits: CommitType[] }) => {
  const dayOfWeek = format(props.dateKey, 'EEEE')
  const [bgColor, itemColor] = fetchDayOfWeekColor(dayOfWeek)

  return (
    <div class={`${bgColor} flex flex-col gap-2 p-6 rounded-lg`}>
      <div class='flex justify-between text-center mt-2 mb-6'>
        <p class='text-xl font-semibold'>{dayOfWeek}</p>
        <CommonBadge content={props.dateKey} color={bgColor} />
      </div>
      {
        props.commits.map((commit) => {
          return (
            <CommitItem commit={commit} color={itemColor} />
          ) 
        })
      }
    </div>
  )
}
