import { createStore } from "redux";
import rootReducers from "./reducers";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("todoApp.tasks", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("todoApp.tasks");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(rootReducers, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;