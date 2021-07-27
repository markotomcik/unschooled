const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK_SUCCESS':
      return [...state, { ...action.payload }]
    case 'EDIT_TASK_SUCCESS':
      return state.map((task) => {
        return task.Id === action.payload.Id ? {
          ...task,
          Name: action.payload.Name
        } : task
      })
    case 'COMPLETE_TASK_SUCCESS':
      return state.map((task) => {
        return task.Id === action.payload.Id ? {
          ...task,
          Completed: !task.Completed
        } : task
      })
    case 'DELETE_TASK_SUCCESS':
      return state.map((task) => {
        return task.Id === action.payload.Id ? {
          ...task,
          Deleted: !task.Deleted
        } : task
      })
    case 'REMOVE_TASK_SUCCESS':
      return state.filter((task) => task.Id !== action.payload.Id)
    case "GET_TASKS_SUCCESS":
      return action.payload
    default:
      return state
  }
}

export default tasks;
