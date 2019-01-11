import React from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

const TodoList = ({ todos, toggleDone }) => {
  return <ul className="todo-list">
    {
      todos.map(todo => {
        return <Todo 
          { ...todo }
          onToggleDone={ toggleDone }
          key={ todo.id }
        />
      })
    }
  </ul>
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired
}

export default TodoList