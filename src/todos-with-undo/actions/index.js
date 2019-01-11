export const addTodoAction = (id, text) => ({
  type: "ADD_TODO",
  id,
  text
})

export const toggleTodoClassAction = id => ({
  type: "TOGGLE_TODO",
  id
})

export const setVisibleFilter = filter => ({
  type: "SET_FILTER",
  filter
})

export const UnAction = () => ({
  type: "un"
})

export const ReAction = () => ({
  type: "re"
})

export const visibleFilterState = {
  ALL: "ALL",
  ACTIVE: "ACTIVE",
  COMPUTED: "COMPUTED"
}