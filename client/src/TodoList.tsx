import Task from './Task'
import { EFilter, ITask } from './Interfaces'

export default function TodoList({ tasks, toggleTask, clearTask, editTask, removeTask, filter }: any) {
  switch (+filter) {
    case EFilter.All:
      const notCleared = tasks.filter((task: ITask) => !task.cleared).map((task: any) => {
        return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
      })
      const cleared = tasks.filter((task: ITask) => task.cleared).map((task: any) => {
        return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
      })

      const isCleared = () => {
        if (tasks.filter((task: ITask) => task.cleared).length > 0 && tasks.filter((task: ITask) => !task.cleared).length) {
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

    case EFilter.Todo:
      return (
        <>
          {tasks.filter((task: ITask) => !task.complete && !task.cleared).map((task: any) => {
            return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
          })}
        </>
      )

    case EFilter.Done:
      return (
        <>
          {tasks.filter((task: ITask) => task.complete && !task.cleared).map((task: any) => {
            return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
          })}
        </>
      )

    case EFilter.Removed:
      return (
        <>
          {tasks.filter((task: ITask) => task.cleared).map((task: any) => {
            return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} task={task} />
          })}
        </>
      )

    default:
      return <div>Error</div>
  }
}
