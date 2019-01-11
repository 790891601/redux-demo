import { connect } from "react-redux"
import { visibleFilterState, toggleTodoClassAction } from "../actions"
import TodosList from "../components/TodosList"

const Visibletodos = (todos, filter) => {
  switch(filter) {
    case visibleFilterState.ACTIVE:
      return todos.filter(item => !item.done)
    case visibleFilterState.COMPUTED:
      return todos.filter(item => item.done)
    default:
      return todos 
  }
}

const mapStateToProps = state => ({
  todos: Visibletodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodoClass: id => dispatch(toggleTodoClassAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)