import React from "react"
import PropTypes from "prop-types"
import TodoInputText from "../components/TodoInputText"

const Header = ({ addTodo }) => {
  return <header className="header">
    <h1>Todos</h1>
    <TodoInputText onSave={ (e) => {
      if(e.keyCode === 13 && e.target.value.length > 0) {
        addTodo(e.target.value)
        e.target.value = ""
      }
    }} />
  </header>
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header