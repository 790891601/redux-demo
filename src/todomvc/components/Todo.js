import React from "react"
import PropTypes from "prop-types"

const Todo = ({ id, text, done, onToggleDone }) => {
  return <li className="todo">
  <div className="view">
    <input className="toggle" type="checkbox" checked={ done } onChange={ () => onToggleDone(id) } />
    <label>{ text }</label>
    <button className="destroy"></button>
  </div>
  <input className="edit" type="text" />
</li>
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggleDone: PropTypes.func.isRequired
}

export default Todo