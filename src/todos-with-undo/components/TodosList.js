import React from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

const TodosList = ({ todos, toggleTodoClass }) => {
  return <section className="todos-list">
    <ul>
      {
        todos.map(todo => 
          <Todo 
            onClick={ () => toggleTodoClass(todo.id) } 
            {...todo}
            key={todo.id} />
        )
      }
    </ul>
  </section>
}

TodosList.propTypes = {
  toggleTodoClass: PropTypes.func.isRequired
}

export default TodosList