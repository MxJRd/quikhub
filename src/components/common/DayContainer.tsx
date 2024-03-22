import { CommonBadge } from "./CommonBadge"
import { CommitItem } from "./commit-item/CommitItem"
import { format } from 'date-fns'
import { CommitHistoriesByDateType } from "../../pages/types"

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
      return ['bg-green-400/[0.2]', 'bg-green-600', 'bg-green-900/[0.45]']
    case DaysOfWeek['Tuesday']:
      return ['bg-orange-400/[0.2]', 'bg-orange-600', 'bg-orange-900/[0.45]']
    case DaysOfWeek['Wednesday']:
      return ['bg-blue-400/[0.2]', 'bg-blue-600', 'bg-blue-900/[0.45]']
    case DaysOfWeek['Thursday']:
      return ['bg-red-400/[0.2]', 'bg-red-600', 'bg-red-900/[0.45]']
    case DaysOfWeek['Friday']:
      return ['bg-yellow-400/[0.2]', 'bg-yellow-600', 'bg-yellow-900/[0.45]']
    case DaysOfWeek['Saturday']:
      return ['bg-purple-400/[0.2]', 'bg-purple-600', 'bg-purple-900/[0.45]']
    case DaysOfWeek['Sunday']:
      return ['bg-pink-400/[0.2]', 'bg-pink-600', 'bg-pink-900/[0.45]']
    default: return ['bg-green-400/[0.2]', 'bg-green-600', 'bg-green-900/[0.45]']
  }
}

export const DayContainer = (props: { dateKey: string, commitDay: CommitHistoriesByDateType }) => {
  const dayOfWeek = format(props.commitDay[props.dateKey]['earliestCommitDate'], 'EEEE')
  const colors = fetchDayOfWeekColor(dayOfWeek)
  const [bgColor] = colors

  return (
    <div class={`${bgColor} flex flex-col gap-2 px-12 pt-6 pb-8 rounded-lg`}>
      <div class='flex justify-between text-center my-2 mb-6'>
        <p class='text-xl font-semibold'>{dayOfWeek}</p>
        <CommonBadge content={props.dateKey} color={bgColor} />
      </div>
      {
        props.commitDay[props.dateKey]['commits'].map((commit) => {
          return (
            <CommitItem commit={commit} colors={colors} />
          ) 
        })
      }
    </div>
  )
}
