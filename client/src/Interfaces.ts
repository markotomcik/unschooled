export interface ITask {
  Id: number
  Name: string
  Desc: string
  Note: string
  Completed: boolean
  Deleted: boolean
  User: number
}

export interface IEdit {
  Id: string | null
  Value: string
}

export enum EFilter {
  All,
  Todo,
  Done,
  Removed
}
