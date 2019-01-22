import { connect } from "react-redux"
import { toggleToDoneAll as onToggleToDoneAll, clearCompuleted as onClearCompuleted } from "../actions"
import MainSection from "../components/MainSection"

const mapStateToProps = ({ todos }) => ({
  isAll: todos.every(todo => todo.done),
  count: todos.filter(todo => !todo.done).length,
  hasCount: todos.length
})

export default connect(mapStateToProps, { onToggleToDoneAll, onClearCompuleted })(MainSection)