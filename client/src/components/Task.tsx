import React, { Component, ChangeEvent } from 'react'
import { IEdit } from '../Interfaces'
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Task extends Component<any, any> {
  taskNameRef: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)

    this.taskNameRef = React.createRef<HTMLInputElement>()

    this.state = {
      edit: {
        Id: null,
        Value: ''
      }
    }

    this.taskNameRef?.current?.focus()
  }

  setEdit = (edit: IEdit) => {
    this.setState({ edit })
  }

  handleClearedTask = () => {
    const classes = "ml-2 font-medium text-justify text-text"
    if (this.props.task.Deleted) {
      return classes + " text-text-cleared"
    }
    return classes
  }

  handleEditTask = () => {
    console.log(this.taskNameRef.current)
    this.setEdit({ Id: this.props.task.Id, Value: this.props.task.Name })
  }

  handleTaskClick = () => {
    this.props.completeTask(this.props.task)
  }

  handleClearTask = () => {
    this.props.deleteTask(this.props.task)
  }

  handleRemoveTask = () => {
    this.props.removeTask(this.props.task)
  }

  handleTaskChange = (value: ChangeEvent<HTMLInputElement>) => {
    this.setEdit({ ...this.state.edit, Value: value.target.value })
  }

  handleSaveTask = () => {
    if (this.taskNameRef.current !== null) {
      const name = this.taskNameRef.current.value
      if (name === '') {
        this.setEdit({
          Id: null,
          Value: ''
        });
        return
      }
      this.props.editTask({
        ...this.props.task, 
        Id: this.state.edit.Id,
        Name: name
      })
      this.taskNameRef.current.value = ''
      this.setEdit({
        Id: null,
        Value: ''
      });
    }
  }

  handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      this.handleSaveTask()
    }
  }

  render() {
    const Buttons = () => {
      if (this.props.task.Deleted) {
        return (
          <>
            <button className="flex-auto rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={this.handleClearTask}>Restore task</button>
            <button className="flex-auto rounded-lg px-3 py-1 m-1 bg-text-cleared font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-text-cleared focus:ring-opacity-50 active:bg-input-light " onClick={this.handleRemoveTask}>Delete permanetly</button>
          </>
        )
      }
      return (
        <>
          <button className="flex-auto rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={this.handleEditTask}>Edit task</button>
          <button className="flex-auto rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={this.handleClearTask}>Remove task</button>
        </>
      )
    }

    if (this.state.edit.Id) {
      return (
        <div className="flex flex-col items-stretch md:items-center md:flex-row mb-3">
          <label className="flex-1 flex items-center m-1">
            <input type="checkbox" className="opacity-0 absolute h-8 w-8" checked={this.props.task.Completed} onChange={this.handleTaskClick} />
            <div className="bg-white border-2 rounded-md border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
              <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <input ref={this.taskNameRef} autoFocus type="text" className="flex-auto px-3 py-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-input-dark focus:ring-opacity-50" value={this.state.edit.Value} onChange={this.handleTaskChange} onKeyDown={this.handleKeyDown} />
          </label>
          <button className="rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={this.handleSaveTask}>Save task</button>
        </div>
      )
    }

    return (
      <div key={this.props.task.Id} className="flex flex-col items-stretch md:items-center md:flex-row mb-3">
        <label className="flex-1 flex items-center m-1">
          <input type="checkbox" className="opacity-0 absolute h-8 w-8" checked={this.props.task.Completed} onChange={this.handleTaskClick} />
          <div className="bg-white border-2 rounded-md border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
            <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <span className={this.handleClearedTask()}>{this.props.task.Name}</span>
        </label>
        <div className="flex items-stretch justify-between">
          <Buttons />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  editTask: (task: any) => dispatch(actions.editTask(task)),
  completeTask: (task: any) => dispatch(actions.completeTask(task)),
  deleteTask: (task: any) => dispatch(actions.deleteTask(task)),
  removeTask: (task: any) => dispatch(actions.removeTask(task))
})

export default connect(
  null,
  mapDispatchToProps
)(Task);