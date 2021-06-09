import Task from './Task'

export default function TodoList({ tasks, toggleTask, clearTask, editTask }: any) {
  return (
    tasks.map((task: any) => {
      return <Task key={task.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} task={task} />
    })
  )
}
