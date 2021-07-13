import { Component } from 'react'

export class TodoForm extends Component<any, any> {
  render() {
    return (
      <div className="mb-2">
        <div className="flex flex-col md:flex-row">
          <input ref={this.props.taskNameRef} autoFocus type="text" className="flex-auto px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-input-dark focus:ring-opacity-50" placeholder="Add Task..." onKeyDown={this.props.handleKeyDown} />
          <div className="flex">
            <button className="flex-auto px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={this.props.handleAddTask}>Add Task</button>
            {/* <button className="px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={handleClearTasks}>Clear Completed</button> */}
            <button className="px-3 py-1 m-1 rounded-lg bg-input-dark font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-inpubg-input-dark focus:ring-opacity-50 active:bg-input-active" onClick={this.props.handleRemoveTasks}>Remove Completed</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoForm