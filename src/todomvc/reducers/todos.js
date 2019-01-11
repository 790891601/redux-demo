const todos = (state= [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state.length + 1, 
          text: action.text,
          done: false
        }
      ]
    case "TOGGLE_DONE":
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

export default todos