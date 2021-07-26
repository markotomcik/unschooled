import { createStore } from "redux";
import rootReducers from "./reducers";

const loadFromBE = async () => {
  /* try {
    const serialisedState = localStorage.getItem("todoApp.tasks");
    if (serialisedState === null) return undefined;
    console.log(JSON.parse(serialisedState))
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }  */

  try {
    const response = await fetch('http://localhost/TodoServer/api/ToDos?UserId=4', {
      method: "GET"
    })
    const data = await response.json()
    console.log(data)
    return await data.Data
  } catch (e) {
    console.warn(e)
  }
}

const store = createStore(rootReducers, loadFromBE())

console.log(store.getState())

export default store;