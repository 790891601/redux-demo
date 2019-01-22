import { ADD_TODO,
         TOGGLE_DONE, 
         TOGGLE_DONE_ALL,
         DESTORY,
         CLEAR_COMPULETED, 
         SAVE_TODO } from "../constants/ActionType"

const todos = (state= [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1, 
          text: action.text,
          done: false
        }
      ]
    case TOGGLE_DONE:
      return state.map(todo => ({
        ...todo,
        done: todo.id === action.id ? !todo.done : todo.done
      }))
    case TOGGLE_DONE_ALL:
      const isAllDone = state.every(todo => todo.done)
      return state.map(todo => ({
        ...todo,
        done: !isAllDone
      }))
    case DESTORY:
      return Object.assign([], state.filter(todo => todo.id !== action.id))
    case SAVE_TODO:
      return state.map(todo => ({
        ...todo,
        text: action.id === todo.id ? action.text : todo.text
      }))
    case CLEAR_COMPULETED:
      return state.filter(todo => !todo.done)
    default: 
      return state
  }
}

export default todos
/*
  已知Bug: DESTORY返回值不能直接返回filter筛选数据, 否则会出现第一个todo无法删除的情况
*/