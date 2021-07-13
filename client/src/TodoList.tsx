import { Component } from 'react'
import Task from './Task'
import { EFilter, ITask } from './Interfaces'

export class TodoList extends Component<any, any> {
  render() {
    switch (+this.props.filter) {
      case EFilter.All:
        const notCleared = this.props.tasks.filter((task: ITask) => !task.cleared).map((task: any) => {
          return <Task key={task.id} toggleTask={this.props.toggleTask} clearTask={this.props.clearTask} editTask={this.props.editTask} removeTask={this.props.removeTask} task={task} />
        })
        const cleared = this.props.tasks.filter((task: ITask) => task.cleared).map((task: any) => {
          return <Task key={task.id} toggleTask={this.props.toggleTask} clearTask={this.props.clearTask} editTask={this.props.editTask} removeTask={this.props.removeTask} task={task} />
        })

        const isCleared = () => {
          if (this.props.tasks.filter((task: ITask) => task.cleared).length > 0 && this.props.tasks.filter((task: ITask) => !task.cleared).length) {
            return (
              <hr className="border-b-2 text-input-light mb-3" />
            )
          }
        }

        return (
          <>
            {notCleared}
            {isCleared()}
            {cleared}
          </>
        )

      case EFilter.Todo:
        return (
          <>
            {this.props.tasks.filter((task: ITask) => !task.complete && !task.cleared).map((task: any) => {
              return <Task key={task.id} toggleTask={this.props.toggleTask} clearTask={this.props.clearTask} editTask={this.props.editTask} removeTask={this.props.emoveTask} task={task} />
            })}
          </>
        )

      case EFilter.Done:
        return (
          <>
            {this.props.tasks.filter((task: ITask) => task.complete && !task.cleared).map((task: any) => {
              return <Task key={task.id} toggleTask={this.props.toggleTask} clearTask={this.props.clearTask} editTask={this.props.editTask} removeTask={this.props.removeTask} task={task} />
            })}
          </>
        )

      case EFilter.Removed:
        return (
          <>
            {this.props.tasks.filter((task: ITask) => task.cleared).map((task: any) => {
              return <Task key={task.id} toggleTask={this.props.toggleTask} clearTask={this.props.clearTask} editTask={this.props.editTask} removeTask={this.props.removeTask} task={task} />
            })}
          </>
        )

      default:
        return <div>Error</div>
    }
  }
}

export default TodoList
