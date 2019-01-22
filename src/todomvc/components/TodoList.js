import React from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

const TodoList = ({ todos, onToggleToDone, onDestory, onSave }) => {
  return <ul className="todo-list">
    {
      todos.map(todo => {
        return <Todo 
          { ...todo }
          onToggleDone={ onToggleToDone }
          onDestory={ onDestory }
          onSave={ onSave }
          key={ todo.id }
        />
      })
    }
  </ul>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onToggleToDone: PropTypes.func.isRequired,
  onDestory: PropTypes.func.isRequired
}

export default TodoList