import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, clearTodo, editTodo }: any) {
  return (
    todos.map((todo: any) => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} clearTodo={clearTodo} editTodo={editTodo} todo={todo} />
    })
  )
}
