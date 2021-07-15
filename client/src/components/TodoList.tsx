import { Component } from 'react'
import Task from './Task'
import { EFilter, ITask } from '../Interfaces'
import { connect } from 'react-redux'

export class TodoList extends Component<any, any> {
  render() {
    switch (+this.props.filter) {
      case EFilter.All:
        const notCleared = this.props.tasks.filter((task: ITask) => !task.cleared).map((task: any) => {
          return <Task task={task} />
        })
        const cleared = this.props.tasks.filter((task: ITask) => task.cleared).map((task: any) => {
          return <Task task={task} />
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
              return <Task task={task} />
            })}
          </>
        )

      case EFilter.Done:
        return (
          <>
            {this.props.tasks.filter((task: ITask) => task.complete && !task.cleared).map((task: any) => {
              return <Task task={task} />
            })}
          </>
        )

      case EFilter.Removed:
        return (
          <>
            {this.props.tasks.filter((task: ITask) => task.cleared).map((task: any) => {
              return <Task task={task} />
            })}
          </>
        )

      default:
        return <div>Error</div>
    }
  }
}

const mapStateToProps = (state: any) => ({
  tasks: state.tasks
})

export default connect(
  mapStateToProps
)(TodoList);