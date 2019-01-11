import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import { TOGGLE_DONE } from "../actions"

const mapStateToProps = ({ todos }) => ({
  todos
})

const mapDispatchToProps = (dispatch) => ({
  toggleDone: (id) => dispatch(TOGGLE_DONE(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)