export interface ITask {
  id: string
  name: string
  cleared: boolean
  complete: boolean
}

export interface IEdit {
  id: string | null
  value: string
}

export enum EFilter {
  All,
  Todo,
  Done,
  Removed
}
