export default (state= [], action) => {
  switch(action.type) {
    case "ADD_TODO": 
      return [
        ...state,
        { 
          id: action.id,
          name: action.text,
          done: false,
        }
      ]
    case "TOGGLE_TODO":
      return state.map(todo => {
        if(todo.id === action.id) {
          todo.done = !todo.done
        }
        return todo
      })
    default:
      return state
  }
}