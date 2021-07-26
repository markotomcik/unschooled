export const getTasksReq = async (userId) => {
  try {
    const response = await fetch('http://localhost/TodoServer/api/ToDos?UserId=4', {
      method: "GET"
    })
    return await response.json()
  } catch (e) {
    console.warn(e)
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
    console.warn(e)
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
    console.warn(e)
  }
}

export const createTaskPost = (task) => {
  try {
    fetch(`http://localhost/TodoServer/api/ToDos`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  } catch (e) {
    console.warn(e)
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
    console.warn(e)
  }
}

export const removeTaskReq = async (id) => {
  try {
    const response = await fetch(`http://localhost/TodoServer/api/ToDos/${id}`, {
      method: "DELETE"
    })
    return await response.json()
  } catch (e) {
    console.warn(e)
  }
}