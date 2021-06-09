import { FC, MouseEvent, useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'
import { ITask } from './Interfaces'

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
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
        return [...prevTasks, { id: uuid(), name: name, complete: false }]
      })
      taskNameRef.current.value = ''
    }
  }

  const handleClearTasks = () => {
    const newTasks = tasks.filter(task => !task.complete)
    setTasks(newTasks)
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleAddTask(event)
    }
  }

  return (
    <>
      <div className="min-h-screen w-100">
        <div className="min-h-screen bg-background py-10 md:py-16 px-6">
          <div className="flex flex-col max-w-xl m-auto justify-center p-4 shadow-xl rounded-xl bg-foreground">
            <div className="mb-2">
              <div className="flex flex-col md:flex-row">
                <input ref={taskNameRef} autoFocus type="text" className="flex-auto px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-input-dark focus:ring-opacity-50" placeholder="Add Task..." onKeyDown={handleKeyDown} />
                <div className="flex">
                  <button className="flex-auto px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={handleAddTask}>Add Task</button>
                  <button className="px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={handleClearTasks}>Clear Completed</button>
                </div>
              </div>
              <div className="m-1 rounded-lg font-medium text-text-secondary">{tasks.filter(task => !task.complete).length} left to do</div>
            </div>
            <TodoList tasks={tasks} toggleTask={toggleTask} clearTask={clearTask} editTask={editTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
