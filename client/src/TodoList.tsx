import Task from './Task'
import { ITask } from './Interfaces'

export default function TodoList({ tasks, toggleTask, clearTask, editTask, removeTask }: any) {
  const notCleared = tasks.filter((task: ITask) => !task.cleared).map((task: any) => {
    return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
  })
  const cleared = tasks.filter((task: ITask) => task.cleared).map((task: any) => {
    return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
  })

  const isCleared = () => {
    if (tasks.filter((task: ITask) => task.cleared).length > 0) {
      return (
        <hr className="border-b-2 text-input-light mb-3" />
      )
    }
  }

  return (
    <>
      {notCleared}
      {isCleared()}
      {cleared}
    </>
  )

}
