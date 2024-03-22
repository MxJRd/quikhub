import { CommitType } from "../components/common/commit-item/types"

export interface CommitHistoriesType {
  commits: CommitType[]
  earliestCommitDate: Date
}

export type CommitHistoriesByDateType = {
[key: string]: CommitHistoriesType
}
