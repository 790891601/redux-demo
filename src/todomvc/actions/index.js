import * as actions from "../constants/ActionType"

export const addTodo = (text) => ({
  type: actions.ADD_TODO,
  text
})

export const toggleToDone = (id) => ({
  type: actions.TOGGLE_DONE,
  id
})

export const toggleToDoneAll = () => ({
  type: actions.TOGGLE_DONE_ALL
})

export const destory = (id) => ({
  type: actions.DESTORY,
  id
})

export const setVisibleFilter = (filter) => ({
  type: actions.SET_VISIBLE_FILTER,
  filter
})

export const clearCompuleted = () => ({
  type: actions.CLEAR_COMPULETED
})

export const saveTodo = (id, text) => ({
  type: actions.SAVE_TODO,
  id,
  text
})