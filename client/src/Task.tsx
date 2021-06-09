import { useState, useRef, ChangeEvent } from 'react'
import { IEdit } from './Interfaces'

export default function Task({ task, toggleTask, clearTask, editTask }: any) {
  const [edit, setEdit] = useState<IEdit>({
    id: null,
    value: ''
  });
  const taskNameRef = useRef<HTMLInputElement>(null)

  taskNameRef?.current?.focus()

  const handleTaskClick = () => {
    toggleTask(task.id)
  }

  const handleClearTask = () => {
    clearTask(task.id)
  }

  const handleEditTask = () => {
    console.log(taskNameRef.current)
    setEdit({ id: task.id, value: task.name })
  }

  const handleTaskChange = (value: ChangeEvent<HTMLInputElement>) => {
    setEdit({ ...edit, value: value.target.value })
  }

  const handleSaveTask = () => {
    if (taskNameRef.current !== null) {
      const name = taskNameRef.current.value
      if (name === '') {
        setEdit({
          id: null,
          value: ''
        });
        return
      }
      editTask(edit.id, name)
      taskNameRef.current.value = ''
      setEdit({
        id: null,
        value: ''
      });
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSaveTask()
    }
  }

  if (edit.id) {
    return (
      <div className="flex flex-col items-stretch md:items-center md:flex-row mb-3">
        <label className="flex-1 flex items-center m-1">
          <input type="checkbox" className="opacity-0 absolute h-8 w-8" checked={task.complete} onChange={handleTaskClick} />
          <div className="bg-white border-2 rounded-md border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
            <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <input ref={taskNameRef} autoFocus type="text" className="flex-auto px-3 py-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-input-dark focus:ring-opacity-50" value={edit.value} onChange={handleTaskChange} onKeyDown={handleKeyDown} />
        </label>
        <button className="rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={handleSaveTask}>Save task</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-stretch md:items-center md:flex-row mb-3">
      <label className="flex-1 flex items-center m-1">
        <input type="checkbox" className="opacity-0 absolute h-8 w-8" checked={task.complete} onChange={handleTaskClick} />
        <div className="bg-white border-2 rounded-md border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
          <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
        <span className="ml-2 font-medium text-justify text-text">{task.name}</span>
      </label>
      <div className="flex items-stretch justify-between">
        <button className="flex-auto rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={handleEditTask}>Edit task</button>
        <button className="flex-auto rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={handleClearTask}>Remove task</button>
      </div>
    </div>
  )
}
