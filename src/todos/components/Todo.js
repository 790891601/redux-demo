import React from "react"
import PropTypes from "prop-types"

const Todo = ({ onClick, done, name, id }) => <li 
  onClick={ onClick } 
  style={{ textDecoration:  done ? "line-through" : null }}>
  { name }
</li>


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo