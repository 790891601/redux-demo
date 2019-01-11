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
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleTodoClass: PropTypes.func.isRequired
}

export default TodosList