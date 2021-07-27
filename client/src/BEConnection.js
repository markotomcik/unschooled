export const getTasksReq = async (userId) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos?UserId=${userId}`, {
      method: "GET"
    })
    return await response.json()
  } catch (e) {
    throw e
  }
}

export const editTaskReq = async (task) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos/${task.Id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...task, Name: task.Name })
    })
    return await response.json()
  } catch (e) {
    throw e
  }
}

export const completeTaskReq = async (task) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos/${task.Id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...task, Completed: !task.Completed })
    })
    return await response.json()
  } catch (e) {
    throw e
  }
}

export const addTaskReq = async (task) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    return await response.json()
  } catch (e) {
    throw e
  }
}

export const deleteTaskReq = async (task) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos/${task.Id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...task, Deleted: !task.Deleted })
    })
    return await response.json()
  } catch (e) {
    throw e
  }
}

export const removeTaskReq = async (id) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos/${id}`, {
      method: "DELETE"
    })
    return await response.json()
  } catch (e) {
    throw e
  }
}