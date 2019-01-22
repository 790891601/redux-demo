import { connect } from "react-redux"
import { toggleToDone, destory, saveTodo } from "../actions"
import { getVisibleTodos } from "../selectors"
import TodoList from "../components/TodoList"

const mapStateToProps = ({ todos, visibleFilter })=> ({
  todos: getVisibleTodos({ todos, visibleFilter }),
  visibleFilter
})

const mapDispatchToProps = (dispatch) => ({
  onToggleToDone: (id) => dispatch(toggleToDone(id)),
  onDestory: (id) => dispatch(destory(id)),
  onSave: (id, text) => dispatch(saveTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)