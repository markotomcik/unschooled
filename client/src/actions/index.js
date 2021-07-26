import { getTasksReq, completeTaskReq } from "../BEConnection"

export const addTask = task => ({
  type: 'ADD_TASK',
  payload: {
    Name: task.Name,
    Desc: task.Desc,
    Note: task.Note,
    Completed: task.Completed,
    Deleted: task.Deleted
  }
})

export const editTask = task => ({
  type: 'EDIT_TASK',
  payload: task
})

export const completeTask = task => ({
  type: 'COMPLETE_TASK',
  payload: task
})

export const deleteTask = task => ({
  type: 'DELETE_TASK',
  payload: task
})

export const removeTask = task => ({
  type: 'REMOVE_TASK',
  payload: {
    Id: task.Id
  }
})

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
      let tasks = await getTasksReq()
      dispatch(getTasksSuccess(tasks.Data))
    } catch (e) {
      dispatch(getTasksFailure())
    }
  }
}
