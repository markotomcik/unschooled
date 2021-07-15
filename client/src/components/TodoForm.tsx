import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

export class TodoForm extends Component<any, any> {
  taskNameRef: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)
    this.taskNameRef = React.createRef<HTMLInputElement>()
    this.taskNameRef?.current?.focus()
  }

  handleAddTask = () => {
    if (this.taskNameRef.current !== null) {
      const name = this.taskNameRef.current.value
      if (name === '') return
      this.props.addTask({ name: name, cleared: false, complete: false })
      this.taskNameRef.current.value = ''
    }
  }

  handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      this.handleAddTask()
    }
  }

  render() {
    return (
      <div className="mb-2">
        <div className="flex flex-col md:flex-row">
          <input ref={this.taskNameRef} autoFocus type="text" className="flex-auto px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-input-dark focus:ring-opacity-50" placeholder="Add Task..." onKeyDown={this.handleKeyDown} />
          <div className="flex">
            <button className="flex-auto px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={this.handleAddTask}>Add Task</button>
            {/* <button className="px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={handleClearTasks}>Clear Completed</button> */}
            {/* <button className="px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={this.props.handleRemoveTasks}>Remove Completed</button> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addTask: (task: any) => dispatch(actions.addTask(task))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
