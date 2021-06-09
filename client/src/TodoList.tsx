import Task from './Task'

export default function TodoList({ todos, toggleTask, clearTask, editTask }: any) {
  return (
    todos.map((todo: any) => {
      return <Task key={todo.id} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} todo={todo} />
    })
  )
}
