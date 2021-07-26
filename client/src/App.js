import { Component } from 'react'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import { EFilter } from './Interfaces'
import { connect } from 'react-redux';
import * as actions from './actions';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: EFilter.Todo
    }
  }

  componentDidMount() {
    this.props.initTasks()
  }

  setFilter = (prop) => {
    this.setState({ filter: prop })
    console.log(this.state)
    console.log(this.props)
  }

  render() {
    return (
      <div className="min-h-screen w-100">
        <div className="min-h-screen bg-background py-10 md:py-16 px-6">
          <div className="flex flex-col max-w-xl m-auto justify-center p-4 shadow-xl rounded-xl bg-foreground">
            <TodoForm />
            <Filter setFilter={this.setFilter} />
            <TodoList filter={this.state.filter} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  initTasks: (userId = 4) => dispatch(actions.initTasks(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
