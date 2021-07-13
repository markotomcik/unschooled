import { FC, MouseEvent, useState, useRef, useEffect } from 'react'
import TodoForm from './TodoForm'
import Filter from './Filter'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'
import { EFilter, ITask } from './Interfaces'

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [filter, setFilter] = useState<EFilter>(EFilter.Todo)
  const taskNameRef = useRef<HTMLInputElement>(null)

  taskNameRef?.current?.focus()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}')
    if (storedTasks) setTasks(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const toggleTask = (id: string) => {
    const newTasks = [...tasks]
    const task: any = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }

  const clearTask = (id: string) => {
    const newTasks = [...tasks]
    const task: any = newTasks.find(task => task.id === id)
    task.cleared = !task.cleared
    setTasks(newTasks)
  }

  const removeTask = (id: string) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const editTask = (id: string, name: string) => {
    const newTasks = [...tasks]
    const task: any = newTasks.find(task => task.id === id)
    task.name = name
    setTasks(newTasks)
  }

  const handleAddTask = (event: MouseEvent) => {
    if (taskNameRef.current !== null) {
      const name = taskNameRef.current.value
      if (name === '') return
      setTasks(prevTasks => {
        return [...prevTasks, { id: uuid(), name: name, cleared: false, complete: false }]
      })
      taskNameRef.current.value = ''
    }
  }

  const handleClearTasks = () => {
    const newTasks = tasks.map((task: any) => {
      if (task.complete) {
        task.cleared = true
      }
      return task
    })
    setTasks(newTasks)
  }

  const handleRemoveTasks = () => {
    const newTasks = tasks.filter(task => !task.complete)
    setTasks(newTasks)
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleAddTask(event)
    }
  }

  const functions = {
    handleAddTask,
    handleClearTasks,
    handleRemoveTasks,
    handleKeyDown
  }

  return (
    <div className="min-h-screen w-100">
      <div className="min-h-screen bg-background py-10 md:py-16 px-6">
        <div className="flex flex-col max-w-xl m-auto justify-center p-4 shadow-xl rounded-xl bg-foreground">
          <TodoForm taskNameRef={taskNameRef} functions={functions} />
          <Filter length={tasks.filter(task => !task.complete && !task.cleared).length} setFilter={setFilter}/>
          <TodoList tasks={tasks} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} removeTask={removeTask} filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default App;
