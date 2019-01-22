import { SET_VISIBLE_FILTER } from "../constants/ActionType"
import { SHOW_ALL } from "../constants/TodoFilter"

const visibleFilter = (state= SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBLE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibleFilter