import React from "react"
import PropTypes from "prop-types"

const Todo = ({ onClick, done, name }) => <li 
  onClick={ onClick } 
  style={{ textDecoration:  done ? "line-through" : null }}>
  { name }
</li>


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Todo