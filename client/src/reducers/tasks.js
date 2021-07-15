import { v4 as uuidv4 } from 'uuid'

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.name,
          cleared: action.payload.cleared,
          complete: action.payload.complete,
        }
      ]
    case 'EDIT_TASK':
      return state.map((task) => {
        return task.id === action.payload.id ? {
          ...task,
          name: action.payload.name
        } : task
      })
    case 'COMPLETE_TASK':
      return state.map((task) => {
        return task.id === action.payload.id ? {
          ...task,
          complete: !task.complete
        } : task
      })
    case 'DELETE_TASK':
      return state.map((task) => {
        return task.id === action.payload.id ? {
          ...task,
          cleared: !task.cleared
        } : task
      })
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload.id)
    default:
      return state
  }
}

export default tasks;