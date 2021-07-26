import { v4 as uuidv4 } from 'uuid'
import { createTaskPost, deleteTaskReq, completeTaskReq, removeTaskReq, editTaskReq } from '../BEConnection'

const tasks = (state = [], action) => {
  let newTask = {}

  switch (action.type) {
    case 'ADD_TASK':
      newTask = {
        Name: action.payload.Name,
        Desc: action.payload.Desc,
        Note: action.payload.Note,
        Completed: action.payload.Completed,
        Deleted: action.payload.Deleted
      }
      createTaskPost(newTask)
      return [...state, newTask]
    case 'EDIT_TASK':
      editTaskReq(action.payload)
      return state.map((task) => {
        return task.Id === action.payload.Id ? {
          ...task,
          Name: action.payload.Name
        } : task
      })
    case 'COMPLETE_TASK':
      completeTaskReq(action.payload)
      return state.map((task) => {
        return task.Id === action.payload.Id ? {
          ...task,
          Completed: !task.Completed
        } : task
      })
    case 'DELETE_TASK':
      deleteTaskReq(action.payload)
      return state.map((task) => {
        return task.Id === action.payload.Id ? {
          ...task,
          Deleted: !task.Deleted
        } : task
      })
    case 'REMOVE_TASK':
      removeTaskReq(action.payload.Id)
      return state.filter((task) => task.Id !== action.payload.Id)
    case "GET_TASKS_SUCCESS":
      return action.payload
    default:
      return state
  }
}

export default tasks;