import { createSelector } from "reselect"
import { SHOW_ACTIVE, SHOW_COMPLETED } from "../constants/TodoFilter"

const getVisibleFilter = (state) => state.visibleFilter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [getVisibleFilter, getTodos],
  (filter, todos) => {
    switch(filter) {
      case SHOW_ACTIVE:  
        return todos.filter(todo => !todo.done)
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.done)
      default:
        return todos
    }
  }
)