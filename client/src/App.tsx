import React, { Component, MouseEvent } from 'react'
import TodoForm from './TodoForm'
import Filter from './Filter'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'
import { EFilter, ITask } from './Interfaces'

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

export class App extends Component<any, any> {
  taskNameRef: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)
    this.state = {
      tasks: [],
      filter: EFilter.Todo
    }

    this.taskNameRef = React.createRef<HTMLInputElement>()

    this.taskNameRef?.current?.focus()
  }

  componentDidMount() {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}')
    if (storedTasks) this.setTasks(storedTasks)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.tasks))

  }

  setTasks = (prop: any) => {
    this.setState({ prop })
  }

  setFilter = (prop: any) => {
    this.setState({ prop })
  }

  toggleTask = (id: string) => {
    const newTasks = [...this.state.tasks]
    const task: ITask = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    this.setTasks(newTasks)
  }

  clearTask = (id: string) => {
    const newTasks = [...this.state.tasks]
    const task: any = newTasks.find(task => task.id === id)
    task.cleared = !task.cleared
    this.setTasks(newTasks)
  }

  removeTask = (id: string) => {
    const newTasks = this.state.tasks.filter((task: any) => task.id !== id)
    this.setTasks(newTasks)
  }

  editTask = (id: string, name: string) => {
    const newTasks = [...this.state.tasks]
    const task: any = newTasks.find(task => task.id === id)
    task.name = name
    this.setTasks(newTasks)
  }

  handleAddTask = (event: MouseEvent) => {
    if (this.taskNameRef.current !== null) {
      const name = this.taskNameRef.current.value
      if (name === '') return
      this.setTasks((prevTasks: any) => {
        return [...prevTasks, { id: uuid(), name: name, cleared: false, complete: false }]
      })
      this.taskNameRef.current.value = ''
    }
  }

  handleClearTasks = () => {
    const newTasks = this.state.tasks.map((task: any) => {
      if (task.complete) {
        task.cleared = true
      }
      return task
    })
    this.setTasks(newTasks)
  }

  handleRemoveTasks = () => {
    const newTasks = this.state.tasks.filter((task: ITask) => !task.complete)
    this.setTasks(newTasks)
  }

  handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      this.handleAddTask(event)
    }
  }

  render() {
    return (
      <div className="min-h-screen w-100">
        <div className="min-h-screen bg-background py-10 md:py-16 px-6">
          <div className="flex flex-col max-w-xl m-auto justify-center p-4 shadow-xl rounded-xl bg-foreground">
            <TodoForm taskNameRef={this.taskNameRef} handlieAddTask={this.handleAddTask} handleClearTasks={this.handleClearTasks} handleRemoveTasks={this.handleRemoveTasks} handleKeyDown={this.handleKeyDown} />
            <Filter length={this.state.tasks.filter((task: ITask) => !task.complete && !task.cleared).length} setFilter={this.setFilter} />
            <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearTask={this.clearTask} editTask={this.editTask} removeTask={this.removeTask} filter={this.state.filter} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
