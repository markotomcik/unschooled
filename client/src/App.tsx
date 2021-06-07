import { FC, MouseEvent, useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'
import { ITodo } from './Interfaces'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const todoNameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}')
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id: string) => {
    const newTodos = [...todos]
    const todo: any = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const clearTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAddTask = (event: MouseEvent) => {
    if (todoNameRef.current !== null) {
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, { id: uuid(), name: name, complete: false }]
      })
      todoNameRef.current.value = ''
    }
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleAddTask(event)
    }
  }

  return (
    <>
      <div className="min-h-screen w-100">
        <div className="bg-yellow-100 py-16">
          <div className="flex flex-col max-w-xl m-auto justify-center p-4 shadow-xl rounded-xl bg-yellow-200">
            <div>
              <div className="flex">
                <input ref={todoNameRef} autoFocus type="text" className="flex-1 px-3 py-1 m-1 rounded-lg bg-yellow-500 font-medium text-yellow-900 placeholder-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50" placeholder="Add Task..." onKeyPress={handleKeyPress} />
                <button className="px-3 py-1 m-1 rounded-lg bg-yellow-500 font-medium text-yellow-900 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 active:bg-yellow-600" onClick={handleAddTask}>Add Task</button>
                <button className="px-3 py-1 m-1 rounded-lg bg-yellow-500 font-medium text-yellow-900 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 active:bg-yellow-600" onClick={handleClearTodos}>Clear Completed</button>
              </div>
              <div className="m-1 rounded-lg font-medium text-yellow-900">{todos.filter(todo => !todo.complete).length} left to do</div>
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} clearTodo={clearTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
