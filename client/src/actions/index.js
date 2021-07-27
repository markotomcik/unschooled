import { getTasksReq, addTaskReq, editTaskReq, completeTaskReq, deleteTaskReq, removeTaskReq } from "../BEConnection"

// ADD TASK

const addTaskRequest = () => ({
  type: 'ADD_TASK_REQUEST'
})

const addTaskSuccess = (task) => ({
  type: 'ADD_TASK_SUCCESS',
  payload: { ...task }
})

const addTaskFailure = () => ({
  type: 'ADD_TASK_FAILURE'
})

export const addTask = task => {
  return async (dispatch) => {
    try {
      dispatch(addTaskRequest())
      task = await addTaskReq(task)
      dispatch(addTaskSuccess(task.Data))
    } catch (e) {
      dispatch(addTaskFailure())
    }
  }
}

// EDIT TASK

const editTaskRequest = () => ({
  type: 'EDIT_TASK_REQUEST'
})

const editTaskSuccess = (task) => ({
  type: 'EDIT_TASK_SUCCESS',
  payload: {
    Id: task.Id,
    Name: task.Name
  }
})

const editTaskFailure = () => ({
  type: 'EDIT_TASK_FAILURE'
})

export const editTask = task => {
  return async (dispatch) => {
    try {
      dispatch(editTaskRequest())
      task = await editTaskReq(task)
      dispatch(editTaskSuccess(task.Data))
    } catch (e) {
      dispatch(editTaskFailure())
    }
  }
}

// COMPLETE TASK

const completeTaskRequest = () => ({
  type: 'COMPLETE_TASK_REQUEST'
})

const completeTaskSuccess = (task) => ({
  type: 'COMPLETE_TASK_SUCCESS',
  payload: {
    Id: task.Id
  }
})

const completeTaskFailure = () => ({
  type: 'COMPLETE_TASK_FAILURE'
})

export const completeTask = task => {
  return async (dispatch) => {
    try {
      dispatch(completeTaskRequest())
      task = await completeTaskReq(task)
      dispatch(completeTaskSuccess(task.Data))
    } catch (e) {
      dispatch(completeTaskFailure())
    }
  }
}

// DELETE TASK (soft delete)

const deleteTaskRequest = () => ({
  type: 'DELETE_TASK_REQUEST'
})

const deleteTaskSuccess = (task) => ({
  type: 'DELETE_TASK_SUCCESS',
  payload: {
    Id: task.Id
  }
})

const deleteTaskFailure = () => ({
  type: 'DELETE_TASK_FAILURE'
})

export const deleteTask = task => {
  return async (dispatch) => {
    try {
      dispatch(deleteTaskRequest())
      task = await deleteTaskReq(task)
      dispatch(deleteTaskSuccess(task.Data))
    } catch (e) {
      dispatch(deleteTaskFailure())
    }
  }
}

// REMOVE TASK (hard delete)

const removeTaskRequest = () => ({
  type: 'REMOVE_TASK_REQUEST'
})

const removeTaskSuccess = (task) => ({
  type: 'REMOVE_TASK_SUCCESS',
  payload: {
    Id: task.Id
  }
})

const removeTaskFailure = () => ({
  type: 'REMOVE_TASK_FAILURE'
})

export const removeTask = task => {
  return async (dispatch) => {
    try {
      dispatch(removeTaskRequest())
      const response = await removeTaskReq(task.Id)
      dispatch(removeTaskSuccess(task))
    } catch (e) {
      dispatch(removeTaskFailure())
    }
  }
}

// GET TASKS

const getTasksRequest = () => ({
  type: 'GET_TASKS_REQUEST'
})

const getTasksSuccess = (tasks) => ({
  type: 'GET_TASKS_SUCCESS',
  payload: tasks || []
})

const getTasksFailure = () => ({
  type: 'GET_TASKS_FAILURE'
})

export const initTasks = () => {
  return async (dispatch) => {
    try {
      dispatch(getTasksRequest())
      let tasks = await getTasksReq(4)
      dispatch(getTasksSuccess(tasks.Data))
    } catch (e) {
      dispatch(getTasksFailure())
    }
  }
}
