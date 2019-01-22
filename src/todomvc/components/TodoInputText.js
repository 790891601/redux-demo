import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

export default class TodoInputText extends Component {
  static get propTypes() {
    return {
      placeholder: PropTypes.string,
      onSave: PropTypes.func.isRequired,
      newTodo: PropTypes.bool,
      editing: PropTypes.bool,
      value: PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      placeholder: "",
      newTodo: false,
      editing: false
    }
  }

  onSave(e) {
    const { onSave, newTodo } = this.props
    
    if(e.keyCode === 13 && e.target.value.length > 0) {
      onSave(e.target.value)
      if(newTodo) {
        e.target.value = ""
      }
    }
  }

  

  render() {
    const { placeholder, newTodo, editing, value } = this.props
    
    return <input className={ classNames({ "new-todo": newTodo, edit: editing }) }
      autoFocus="autofocus" 
      autoComplete="off"
      placeholder={ placeholder }
      defaultValue={ value }
      onKeyUp={ this.onSave.bind(this) } />
  }
}