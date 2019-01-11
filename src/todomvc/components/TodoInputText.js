import React from "react"
import PropTypes from "prop-types"

const AddTodo = ({ onSave }) => {
  return <input className="new-todo"
  autoFocus="autofocus" autoComplete="off"
  placeholder="What needs to be done?"
  onKeyUp={ onSave } />
}

AddTodo.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default AddTodo