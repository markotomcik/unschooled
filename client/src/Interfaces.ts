export interface ITask {
  id: string
  name: string
  complete: boolean
}

export interface IEdit {
  id: string | null
  value: string
}