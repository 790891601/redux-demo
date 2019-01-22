import React from "react"
import PropTypes from "prop-types"
import TodoInputText from "../components/TodoInputText"

const Header = ({ addTodo }) => {
  return <header className="header">
    <h1>Todos</h1>
    <TodoInputText onSave={ addTodo }
      newTodo={ true }
      placeholder="What needs to be done?"
    />
  </header>
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header