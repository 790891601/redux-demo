import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import TodoInputText from "./TodoInputText"

class Todo extends Component {
  state= {
    isEditing: false
  }

  onSave= (value) => {
    const { onSave, id } = this.props
    this.setState({
      isEditing: false
    })

    onSave(id, value)
  }

  onToEditing= () => {
    this.setState({
      isEditing: true
    })
  }

  render= () => {
    const { id, text, done, onToggleDone, onDestory } = this.props
    const { isEditing } = this.state

    return <li className={ classNames({ todo: true, completed: done, editing: isEditing }) }>
      <div className="view">
        <input className="toggle" type="checkbox" checked={ done } onChange={ () => onToggleDone(id) } />
        <label onDoubleClick={ this.onToEditing.bind(this) }>{ text }</label>
        <button className="destroy" onClick={ () => onDestory(id) }></button>
      </div>
      <TodoInputText onSave={ this.onSave.bind(this) } editing={ true } value={ text } />
    </li>
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDestory: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default Todo