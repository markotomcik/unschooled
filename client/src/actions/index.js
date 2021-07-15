export const addTask = task => ({
  type: 'ADD_TASK',
  payload: {
    name: task.name,
    cleared: task.cleared,
    complete: task.complete
  }
})

export const editTask = task => ({
  type: 'EDIT_TASK',
  payload: {
    id: task.id,
    name: task.name,
  }
})

export const completeTask = task => ({
  type: 'COMPLETE_TASK',
  payload: {
    id: task.id,
    complete: task.complete
  }
})

export const deleteTask = task => ({
  type: 'DELETE_TASK',
  payload: {
    id: task.id,
    cleared: task.cleared
  }
})

export const removeTask = task => ({
  type: 'REMOVE_TASK',
  payload: {
    name: task.name,
    cleared: task.cleared,
    complete: task.complete
  }
})

export const initTasks = tasks => ({
  type: 'INIT_TASKS',
  payload: tasks
})
