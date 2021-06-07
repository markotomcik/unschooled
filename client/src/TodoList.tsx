import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, clearTodo }: any) {
  return (
    todos.map((todo: any) => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} clearTodo={clearTodo} todo={todo} />
    })
  )
}
